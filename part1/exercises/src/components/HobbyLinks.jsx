export default function HobbyLinks() {
    let pageTitle = "Links to Track your Movies and Books"
    let link1 = "https://www.goodreads.com/"; 
    let link2 = "https://app.thestorygraph.com/users/sign_in";
    let link3 = "https://letterboxd.com/sign-in/";
    let hobbyLinks = [link1, link2, link3];
    
    return(
        <div>
            <h3>{pageTitle}</h3>
            <a href = {hobbyLinks[0]}>Goodreads: See what your friends are reading!</a>
            <a href = {hobbyLinks[1]}>The StoryGraph: See your reading and library statistics!</a>
            <a href = {hobbyLinks[2]}>Letterboxd: See what your friends are watching!</a>
        </div>
    );
}