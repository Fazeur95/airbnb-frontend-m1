import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import placeService from "../../services/place.service";
import typeService from "../../services/type.service";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Notification from "../../components/Notification";
import userService from "../../services/user.service";



//Create a component to add places

const AddPlace = () => {
    const [userLogged, setUserLogged] = React.useState(false);
    const [userId, setUserId] = React.useState(null);
    const [message, setMessage] = React.useState(null);
    const [types, setTypes] = React.useState([]);
    const [places, setPlaces] = React.useState([]);
    const [placeForm, setPlaceForm] = React.useState({
        title: "",
        capacity : "",
        description : "",
        pricing : "",        
        images : "",
        owner : "",
        city : "",
        country : "",
        postalCode : "",
    
    });
    //Check if user is logged in

    React.useEffect(() => {
        userService.getMe().then((data) => {
            setUserLogged(true);
        });
        //If user is not logged in, redirect to login page
      
    }, []);

    //Get user id if logged in

    React.useEffect(() => {
        userService.getMe().then((data) => {
            setUserId(data.id);
            setPlaceForm({
                ...placeForm,
                owner: data.id,

            });
        });
    }, []);


    

    React.useEffect(() => {
        typeService.getTypes().then((data) => {
            setTypes(data);
        });
        
    }, []);

    const [loading, setLoading] = React.useState(true);
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setPlaceForm({
            ...placeForm,
            [name]: value,
        });
    }
    const submitForm = (event) => {
        event.preventDefault();
        placeService.createPlace(placeForm).then((data) => {
            console.log(data);
        });
    }
    //Create a form to add places
    console.log(placeForm);

    return (
        
        <div className={styles.wrapper}>
       
            <form className={styles.form__place} onSubmit={submitForm}>
                <Input
                    titleLabel="title"
                    inputType="text"
                    inputPlaceholder="Titre"
                    inputName="title"
                    inputValue={placeForm.title || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />
                <Input
                    titleLabel="description"
                    inputType="text"
                    inputPlaceholder="Description"
                    inputName="description"
                    inputValue={placeForm.description || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />
                <Input titleLabel="capacity" inputType="number" inputPlaceholder="Capacité" inputName="capacity" inputValue={placeForm.capacity || ""} inputOnChange={(event) => {
                        handleInput(event);
                    }}/>
                    
                <select name="type" id="type">
                    {types.map((type) => (
                        <option key="types" value={type._id}>{type.name}</option>
                    ))}
                </select>

                <Input
                    titleLabel="pricing"
                    inputType="number"
                    inputPlaceholder="Prix"
                    inputName="pricing"
                    inputValue={placeForm.pricing || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />
                <Input
                    titleLabel="images"
                    inputType="url"
                    inputPlaceholder="Images"
                    inputName="images"
                    inputValue={placeForm.images || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />  
                <Input
                    titleLabel="Pays"
                    inputType="text"
                    inputPlaceholder="Pays"
                    inputName="country"
                    inputValue={placeForm.country || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />
                <Input
                    titleLabel="Ville"
                    inputType="text"
                    inputPlaceholder="Ville"
                    inputName="city"
                    inputValue={placeForm.city || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />
              
                <Input
                    titleLabel="Code Postal"
                    inputType="text"
                    inputPlaceholder="Code postal"
                    inputName="postalCode"
                    inputValue={placeForm.postalCode || ""}
                    inputOnChange={(event) => {
                        handleInput(event);
                    }}
                />

                
               
                <Button type="submit" title="Ajouter" btnClass="btn__primary" handleClick={
                    (event) => {
                        submitForm(event);
                    }
                }/>
                {message && <Notification message={message} type={type}/>}
            </form>
            </div>
      
    ); 
    

}


export default AddPlace;

