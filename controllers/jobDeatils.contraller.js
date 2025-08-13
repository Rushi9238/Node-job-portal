class jobDetailsController{
    async getJobDetails(req,res){
        const jobId= req.params.id;
        res.render('pages/job_details', { title: 'Job List' });
    }
}

module.exports = jobDetailsController;