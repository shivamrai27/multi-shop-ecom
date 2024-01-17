export const errorMiddleware = (err, req, res, next) => {
    // destructuringn and storing error object thrown by controller next() function and stored into new variable called error just because not to distort original error object
    let error = { ...err };
    error.message = err.message;


    // just for e.g. we handle ValidationError type 
    if (err.name === 'ValidationError') {
        //here we convert object into array by .value() method and use map to iterate over by map and extract .message  property and stroing it to new variable array called error bcz map return fresh array 
        const message = Object.values(err.errors).map(value => value.message);
        //VVIP-> here merege message new error variable by using Errornconstructor function and passing message and by
        // doing this we add extra valuable property (which is error.stack, error.code etc) and motive is also to convert them again in Javascript Object which is error variable 
        error = new Error(message)// new Error() convert into object
    };

    // Handling mongoose duplicate key(code of duplicate entry is 11000) error
    if (err.code === 11000) {
        console.log(err);
        //err contain a property called keyValue we check this by doing .log()
        const message = `Duplicate ${Object.keys(err.keyValue)} found`;
        error = new Error(message)// new Error() convert into object
    };

    //Handling Wrong mongoose object ID or CastError it means 
    //mongoose ki id ka format aur length agr wrong hua ya incomplete haitb ye error aata hai
    // naki galt id pe 

    if (err.name === 'CastError') {
        const message = `Resource not found. Inavlid: ${err.path}`;
        error = new Error(message)// new Error() convert into object
    }

    res.json({
        error: error.message
    });
    // log(err);


    // res.json(err);
}