import Box from "./comp/box/box";
import Categorie from "./comp/categorie/categorie";
import Soucategorie from "./comp/souscategorie/soucategorie";


export default function Mainbox(){
    return(
        <div>
            <Categorie/>
            <Box/>
        </div>
    )
}