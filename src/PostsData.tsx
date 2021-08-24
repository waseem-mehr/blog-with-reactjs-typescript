interface IPost{
    slug:string;
    mainHeading:string;
    content:string;
    thumbnailUrl:string;
    publishDate:string;
    categorey:string;

}

export const posts:IPost[]=[
    {
        slug:'rumored-2021-iPhone-lineup',
        mainHeading:'Rumored 2021 iPhone Lineup',
        content:'There were early rumors that at least one iPhone in 2021 would feature a portless design that relies entirely on wireless charging, but reliable Apple analyst Ming-Chi Kuo says thats not going to happen. Apple is going to continue to rely on Lightning for the foreseeable future with no transition to USB-C and there will be no portless design until MagSafe accessories are more common. Portless iPhones could instead start appearing in 2022.',
        thumbnailUrl:'https://images.macrumors.com/t/DSYynjlDD4oI-u1LcQu26tebkLE=/1600x0/filters:quality(90)/article-new/2020/10/iphone-12-vs-iphone-12-mini.jpg',
        publishDate:'August 23, 2021',
        categorey:'technology'
    },
    {
        slug:'facebook-bringing-voice-and-video-calling-back-to-main-app',
        mainHeading:'Facebook Bringing Voice and Video Calling Back to Main App After Moving Them to Messenger',
        content:'Users in some countries including the United States are now able to make voice or video calls directly from the Facebook app. As of now, Facebook is testing the feature, which is meant to cut down on the number of times that Facebook users need to swap over to the Messenger app.Messenger and Facebook used to be a single app, but in 2014, Facebook split them into separate apps and removed Messenger functionality from Facebook. Customers were forced to download the Messenger app to send private messages to other Facebook users or to make phone calls using the Facebook platform.',
        thumbnailUrl:'https://images.macrumors.com/t/xbTV-KV7-LSAmlKHTT8RcU_ppP0=/800x0/filters:quality(90)/article-new/2021/03/Facebook-Feature.jpg?lossy',
        publishDate:'August 23, 2021',
        categorey:'technology'
    },
    {
        slug:'pfizer-biontech-COVID-19-vaccine-gets-full-FDA-approval',
        mainHeading:'Pfizer-BioNTech COVID-19 Vaccine Gets Full FDA Approval',
        content:'The Food and Drug Administration (FDA) granted full approval to Pfizer-BioNTech’s COVID-19 vaccine, making it the first vaccine of its kind to reach this regulatory milestone in the United States.',
        thumbnailUrl:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/08/Pfizer_Vaccine_732x549-thumbnail-732x549.jpg?w=420',
        publishDate:'August 22, 2021',
        categorey:'health'
    },
    {
        slug:'shaheen-and-abbas-lead-Pakistan',
        mainHeading:'Shaheen and Abbas lead Pakistan to get in control of West Indies Test',
        content:'KINGSTON: Shaheen Shah Afridi claimed career-best figures of six for 51 in leading the rout of the West Indies for just 150 in the first innings as Pakistan surged into complete control of the second Test of the two-match series at tea on the fourth day at Sabina Park on Monday.',
        thumbnailUrl:'https://www.thenews.com.pk/assets/uploads/updates/2021-08-24/882137_5653008_SHAHEEN-wi-test2a_updates.jpg',
        publishDate:'August 24, 2021',
        categorey:'sports'
    },
    {
        slug:'lightning-strikes-one-world-trade-center',
        mainHeading:'Lightning strikes One World Trade Center',
        content:'Striking video has been captured of lightning hitting the One World Trade Center in New York City, as Storm Henri approached the north-east of the US.Heavy rain caused by the storm has caused damage across several states.Millions of people have been told to prepare for flooding, as well as downed trees and power lines.',
        thumbnailUrl:'data:image/jpeg;base64,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',
        publishDate:'August 24, 2021',
        categorey:'weather'
    },

]

