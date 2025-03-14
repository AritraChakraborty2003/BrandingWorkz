import messageModel from "../models/message.js"

export async function showAll_Messages(req,res){
    try {
        let allMessages = await messageModel.find()
        res.status(200).json(allMessages)
    } catch (error) {
        res.status(500).json({ message: 'Server error!', error: error.message});
    }
}

export async function send_Message(req,res) {
    try {
        const {sender, receiver, content} = req.body;

        await messageModel.create({
            sender,
            receiver,
            content
        })

        res.status(200).json({message: "Message sent successfully"});
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

export async function delete_Message(req,res) {
    try {
        await messageModel.findOneAndDelete({_id: req.params.id})
        res.status(200).json({message: 'Message sent successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

