import React from "react";
import { useRoutePath } from "../router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

export const Main = () => {
    const { stateChange } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChangeUser())
    }, []);

    const navigationRef = useNavigationContainerRef();
    const routing = useRoutePath(stateChange);

    return (
        <NavigationContainer ref={navigationRef}>
        {routing}
        </NavigationContainer>
    )    
}