import jwt from 'jsonwebtoken';
export const isAuthenticatedUser = (req, res, next) => {
    const token = req.cookies.token

    //Checking is any token is coming form client side or not
    if (!token) {
        next(new Error("Please login to access this page"));
    }
    // verifying the token is valid or not when user signed in generate a token
    const decode = jwt.verify(token, "3zD_MCvoUKfXEIWZ9uoAdzgih6Rv7kr0_ti19cLadruAm46dutwEUYoLmRawIPpPJoqYYX2ysqPzmnGU6BnlpVnS1LbuxJTu9zvm5uSAG7P8ccm1l4sOso6EFf_MNoBtXPAYw1sRaMsLdTJhfzpgMoz9iwNwDL5JC_1Tzh3dxUM")
    //appending a new user property with data in req body which can be accessibe to anywhere in the website
    req.user = decode.user
    next();
} 