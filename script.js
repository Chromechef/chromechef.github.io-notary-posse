const mediaQuery = '(max-width: 600px)';
const mediaQueryList = window.matchMedia(mediaQuery);

// Modal
const openModalButtons = document.querySelectorAll(".open-modal")
const modal = document.getElementById('modal')
const schoolText = document.getElementById('school-text')
const schoolInfoButton = document.getElementById('school-button')
const notaryInfoButton = document.getElementById('virtual-button')
const seniorInfoButton = document.getElementById('senior-button')
const apostilleInfoButton = document.getElementById('apostille-button')
const mopileInfoButton = document.getElementById('mobile-button')

document.getElementById("modal").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    modal.innerHTML = ''
})

for (const button of openModalButtons) {
    button.addEventListener("click", function () {
        document.getElementById("overlay").style.display = "block";
    })
}


mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);

    if (event.matches) {
        console.log('The window is now under 600px');
    } else {

        console.log('The window is now over 600px');

    }
})




const schoolInnerHtml =
    `
    <h3 class="text-orange">School Notary</h3>

    <p>College may require certain documents, financial or other forms be Notarized.
    You can download the document from our site or upload your own. When using documents
    from our site we have already confirmed that documents can be Remote Online Notarized. Or
    again, we can come to your home or meet you somewhere. Even Elementary schools have some 
    forms that may need to be notarized</p>
    `

const virtualNotaryHtml =
    `
    <h3 class="text-orange">Virtual Notary </h3>
                        
    <p>Washington State has approved Remote Online Notarizations. What is
    that? In a nutshell,both of us enter a special Secure Platform online.
    (computer or smart phone!) You will answer some knowledge based questions.                              
    You show your ID and the system will confirm identity.
    Entire notarization is recorded and documents signed electronically.
    You arethen emailed or can download the Notarized document.
    Side note, whoever the end user is (DMV, Hospital etc.)
    will determine if they will accept a Remote Online Notarized Form.</p>
    `

const seniorCommunityHtml =
    `
    <h3 class="text-orange open-modal">Senior Community</h3>   
    
    <p>Our Mission is to make sure no one takes advantage of our Seniors. This is so
    personal and is why we started. We needed a Power of Attorney notarized for my Dad.
    But leaving the house was so very difficult for him to do.
    OK, I need to find a Notary...Asked all my
    friends and one of them was a Notary. She came over that evening assessed if he was
    competent and coherent and willing to sign the papers.
    Sometimes Medication can make our Seniors "loopy" or confused.
    so we need to time the notarization carefully for them. She was so amazing,
    I knew I had to do the same!</p>
                                     
    `

const apostilleServicesHtml =
    `
    <h3 class="text-orange">Apostille Services</h3>
                        
    <p> Going out of the Country? Maybe a destination Wedding, adoption, School or forwork? 
    You will need documents certified (Apostille) to be accepted by the Country of Destination.
    It can get overwhelming, what countries are part of the Hague Convention, does this
    document go to the Secretary of State or an Embassy? Let us cut through all the red tape.
    We draw onyears of experience knowing which route to send them or walk them through. </p>
    `

const mobileNotaryPublicHtml =
    `
    <h3 class="text-orange">Mobile Notary Public</h3>
                                              
    <p>It can be so frustrating. You need a Notary, which used to be so easy to find at
    your local Bank. Not any more. Most Banks will only Notarize their own documents, if they
    even do that. Being a Mobile Notary Public allows me to come to you.
    Or we can meet somewhere, for instance a coffee shop, DMV, Hospital etc.
    There is no reason for you to drive to try and find a Notary. 
    I am here when you need me!</p>
    `




schoolInfoButton.addEventListener("click", () => {
    modal.innerHTML = schoolInnerHtml
})

notaryInfoButton.addEventListener("click", () => {
    modal.innerHTML = virtualNotaryHtml
})

seniorInfoButton.addEventListener("click", () => {
    modal.innerHTML = seniorCommunityHtml
})

apostilleInfoButton.addEventListener("click", () => {
    modal.innerHTML = apostilleServicesHtml
})

mopileInfoButton.addEventListener("click", () => {
    modal.innerHTML = mobileNotaryPublicHtml
})




