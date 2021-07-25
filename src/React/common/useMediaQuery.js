import React, {
    useState,
    useEffect,
    createContext,
    useContext
} from 'react';

export const defaultMediaQueries = {
    xs: '(max-width: 320px)',
    sm: '(min-width: 321px) and (max-width: 720px)',
    md: '(min-width: 721px) and (max-width: 1024px)',
    lg: '(min-width: 1025px) and (max-width: 1900px)',
    xl: '(min-width: 1901px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
}

const defaultState = {
    media: {
        xs: true,
        sm: false,
        md: false,
        xl: false,
        portrait: true,
        landscape: false,
    },
    dimensions: {
        width: 0,
        height: 0,
    }
}

const MediaQueryContext = createContext(defaultMediaQueries);

export const MediaQueryProvider = ({children, mediaQueries=defaultMediaQueries}) => {

    const [mediaState, mediaStateUpdate] = useState(defaultState);

    useEffect(() => {
        const evaluateMedia = () => {
            let newMediaState = {...mediaState};

            Object.keys(mediaQueries).forEach((mediaQueryKey) => {
                // console.log('mediaQueries[mediaQueryKey]', mediaQueries[mediaQueryKey]);
                const mediaResponse = window.matchMedia(mediaQueries[mediaQueryKey]);
                // console.log('mediaResponse', mediaResponse);
                newMediaState.media[mediaQueryKey] = mediaResponse.matches;
            });

            newMediaState.dimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
            }

            mediaStateUpdate(newMediaState);
        }

        evaluateMedia();

        window.addEventListener('resize', evaluateMedia);
        return () => {
            window.removeEventListener('resize', evaluateMedia);
        };

    }, []);

    return (
        <MediaQueryContext.Provider value={ mediaState }>
            {children}
        </MediaQueryContext.Provider>
    )
}

export const useMediaQuery = () => {
    return useContext(MediaQueryContext);
}

