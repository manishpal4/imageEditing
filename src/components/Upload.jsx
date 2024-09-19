

const ImageUpload = () => {
    const [avatarURL, setAvatarURL] = useState(DefaultImage);
        return (
            <div className="relative h-96 w-96 m-8">
              <img 
                src={avatarURL}
                alt ="Avatar"
                className="h-96 w-96 rounded-full" />

              <form id="form" encType='multipart/form-data'>
                <button
                  type='submit'
                  className='flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full'>
                  <img
                    src={EditIcon}
                    alt="Edit"
                    className='object-cover' />
                </button>
              </form>  
            </div>
         )
}

export default ImageUpload;
