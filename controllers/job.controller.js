

// exports.jobList = async (req,res)=>{
//     res.render('pages/jobs', { title: 'Job List' });
// }

class jobController {
     async jobList(req, res) {
        res.render('pages/jobs', { title: 'Job List' });
    }
}

module.exports = jobController;