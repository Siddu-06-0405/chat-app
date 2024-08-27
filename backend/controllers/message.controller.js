import mongoose from 'mongoose';
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params; // receiverId from request parameters
        const senderId = req.user._id; // senderId from middleware

        // Ensure senderId and receiverId are ObjectIds
        const senderObjectId = new mongoose.Types.ObjectId(senderId.toString());
        const receiverObjectId = new mongoose.Types.ObjectId(receiverId.toString());

        // Find the conversation between participants
        let conversation = await Conversation.findOne({
            participants: { $all: [senderObjectId, receiverObjectId] }
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = new Conversation({
                participants: [senderObjectId, receiverObjectId],
            });
            await conversation.save();
        }

        // Create a new message
        const newMessage = new Message({
            senderId: senderObjectId,
            receiverId: receiverObjectId,
            message,
        });

        // Add the new message to the conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
            await newMessage.save();
        }

        // Respond with the new message
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
