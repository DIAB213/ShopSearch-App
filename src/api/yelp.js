import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _XqBNgEOeAl9NiEigWMVHmcoPtEA7CEn_Ifc-Tj0yjZ25IPat2Uz7PwgK2vPt21Cp-YOgd4eAtGUS89VjR5CT-Tbcrn1zXuL8X3K5XPP1Xg4ko5reAa_OxB0AfIOX3Yx'
    }
});
