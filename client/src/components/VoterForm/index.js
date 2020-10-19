import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
import "./index.css";
import { useStoreContext } from '../../store/store';
import { UPDATE_USER_DATA } from '../../store/actions';

export default function VoterForm(props) {

    console.log("VoterForm props:",props);
    const [state, dispatch] = useStoreContext();

    const userNameRef = useRef();
    const cityRef = useRef();
    const countyRef = useRef();
    const stateRef = useRef();
    const countryRef = useRef();
    const useStyles = makeStyles((theme) => ({   
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                color: lightBlue,
                },
            },
        }));

    const classes = useStyles();

    const updateInfo = (event) => {
        // console.log("target id", event.target.getAttribute("id"));
        const info = event.target.getAttribute("id");
        const currentInfo = state.userData[info];
        let currentRef; 
        switch (info) {
            case "name":
                currentRef = userNameRef;
                break;
            case "city":
                currentRef = cityRef;
                break; 
            case "county":
                currentRef = countyRef;
                break; 
            case "state":
                currentRef = stateRef;
                break; 
            case "country":
                currentRef = countryRef;
                break; 
        }
        const newInfo = currentRef.current.childNodes[1].firstChild.value;
        state.userData[info] = newInfo;
        // console.log("User Data", state.userData);
    }



    return (
        <form className={classes.root} noValidate autoComplete="off">
        <h3>Update Your Voter Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={userNameRef}  placeholder={props.data.name} id="name" label="Name" variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={cityRef} placeholder={props.data.city} id="city" label="City" variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={countyRef} placeholder={props.data.county} id="county" label="County" variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={stateRef} placeholder={props.data.state} id="state" label="State" variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={countryRef} placeholder={props.data.country} id="country" label="Country" variant="outlined" />
                <br />
            </div>


            <button className="update-info-button">Update Voter Info</button>
            <br />
            <button className="update-info-button">Add Candidacy</button>
            <br />
            <button className="update-info-button">Delete Account</button>

        </form>
    );
}