import serviceModel from "../models/service.js";

export async function all_Services(req,res) {
    try {
        const allServices = await serviceModel.find();
        res.status(200).json({message: allServices})
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
}

export async function add_Service(req,res) {
    try {
        const { name, description} = req.body;
        await serviceModel.create({
            name,
            description
        })
        res.status(200).json({message: 'Service added successfully'});

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
}

export async function update_Service(req,res) {
    try {
        const {name, description} = req.body
        console.log(name, description)
        let updatedService = await serviceModel.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{
                name,
                description
            }},
            {new: true}
        )
        if(!updatedService) return res.status(404).json({message: 'Service not found'});
        res.status(200).json({message: 'Service updated successfully', data: updatedService});

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
}

export async function delete_Service(req,res) {
    try {
        await serviceModel.findOneAndDelete({_id: req.params.id})
        res.status(200).json({message: 'Service deleted successfully'})
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
}

