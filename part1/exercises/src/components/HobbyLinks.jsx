export default function HobbyLinks() {
    let pageTitle = "Links to Track your Movies and Books"
    let link1 = "https://www.goodreads.com/"; 
    let link2 = "https://app.thestorygraph.com/users/sign_in";
    let link3 = "https://letterboxd.com/sign-in/";
    let hobbyLinks = [link1, link2, link3];
    
    return(
        <div>
            <h3>{pageTitle}</h3>
            <a href = {hobbyLinks[0]} target = "blank">Goodreads: See what your friends are reading!</a> <br></br>
            <a href = {hobbyLinks[1]} target = "blank">The StoryGraph: Get statistics about your reading and library!</a> <br></br>
            <a href = {hobbyLinks[0]} target = "blank">Letterboxd: Log and discuss movies with friends!</a> <br></br>
        </div>
    );
}