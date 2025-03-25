import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = (detailsTitle) => {
    const location = useLocation();

    useEffect(() => {
        let pageTitle 

        if (location.pathname.startsWith("/details/")) {
            pageTitle = `${detailsTitle} | StreamFlix`; 
        } 
        else{
            switch (location.pathname) {
                case "/":
                    pageTitle = "Home | StreamFlix";
                    break;
                case "/sign-in":
                    pageTitle = "Sign In | StreamFlix";
                    break;
                case "/sign-up":
                    pageTitle = "Sign Up | StreamFlix";
                    break;
                case "/forget-password":
                    pageTitle = "forget-password | StreamFlix";
                    break;
                case "/add-movie":
                    pageTitle = "Add Movie | StreamFlix";
                    break;
                case "/update-movie":
                        pageTitle = "Update Movie | StreamFlix";
                        break;
                case "/all-movies":
                            pageTitle = "All Movies | StreamFlix";
                            break;
                case "/my-favorites":
                                pageTitle = "My Favorites | StreamFlix";
                                break;
                case "/about-us":
                                    pageTitle = "About Us | StreamFlix";
                                    break;
                case "/contact-us":
                                    pageTitle = "Contact Us | StreamFlix";
                                    break;
                
                default:
                    pageTitle = "StreamFlix";
                    break;
            }
        }
        

        document.title = pageTitle;
    }, [location,detailsTitle]);
};

export default useTitle;
