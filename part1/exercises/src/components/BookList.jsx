export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://prodimage.images-bn.com/pimages/9780063055995_p0_v6_s1200x630.jpg";
   let book2 = "https://target.scene7.com/is/image/Target/GUEST_6e402b70-eab4-4d99-bc0b-cdb2051dad49?wid=488&hei=488&fmt=pjpeg";
   let book3 = "https://pictures.abebooks.com/isbn/9781398717206-us.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A River Enchanted by Rebecca Ross" />
         <img src={book2} alt="A Fire Endless by Rebecca Ross" />
         <img src={book3} alt="Magnolia Parks by Jessa Hastings" />
      </div>      
   );
}