import projectModel from "../models/project.js";

export async function listAll_Projects(req,res) {
    try {
        const allProjects = await projectModel.find();
        res.status(200).json({message: allProjects})
    } catch (error) {
        res.status(500).json({message: 'Server error',error:error.message})
    }
}

export async function Add_Project(req,res) {
    try {
        const {title, description, techStack} = req.body
        let createdProject = await projectModel.create({
            title,
            description,
            techStack
        })
        res.status(200).json({message: "Project Created Successfully", data: createdProject})
    } catch (error) {
        res.status(500).json({message: 'Server error',error:error.message})
    }
}

export async function Update_Project(req,res) {
    try {
        const {title, description, techStack} = req.body
        let updatedProject = await projectModel.updateOne(
            {_id: req.params.id},
            {$set:{
                title,
                description,
                techStack
            }}
        )
        res.status(200).json({message: 'Project updated successfully', data: updatedProject})
    } catch (error) {
        res.status(500).json({message: 'Server error',error:error.message})
    }
}

export async function delete_Project(req,res) {
    try {
        let deletedProject = await projectModel.findOneAndDelete({_id: req.params.id})
        if(!deletedProject) return res.status(404).json({message: 'Project not found'})
        res.status(200).json({message: 'Project deleted successfully',data: deletedProject})
    } catch (error) {
        res.status(500).json({message: 'Server error',error:error.message})
    }
}