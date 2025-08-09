
function ProfilePicture(){

    const imageUrl = "./src/assets/biji.png"

    const handleClick = (e) => e.target.style.display = "none"


    return(<img onClick={(e) => handleClick(e)} src={imageUrl} className="gambar-apalah"></img>)
}

export default ProfilePicture