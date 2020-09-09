module.exports = {
    future: {
        removeDeprecatedGapUtilities: true
    },
    purge: {
        enabled: true,
        content: [
            './index.html',
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
        ],
        options: {
            whitelist: []
        }
    },
    theme: {
        screens: {
            'sm': '640px',
        },
        colors: {},
        spacing: {},
        backgroundColor: {},
        backgroundImage: {},
        gradientColorStops: {},
        backgroundOpacity: {},
        backgroundPosition: {},
        backgroundSize: {},
        borderColor: {},
        borderOpacity: {},
        borderRadius: {},
        borderWidth: {},
        boxShadow: {},
        container: {},
        fill: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        fontFamily: {},
        fontFamily: {},
        fontWeight: {},
        height: {},
        inset: {},
        letterSpacing: {},
        lineHeight: {},
        listStyleType: {},
        margin: {},
        maxHeight: {},
        maxHeight: {},
        minHeight: {},
        minWidth: {}
    },
    variants: {
        accessibility: [],
        alignContent: [],
        alignItems: [],
        alignSelf: [],
        appearance: [],
        backgroundAttachment: [],
        backgroundClip: [],
        backgroundColor: [],
        backgroundImage: [],
        gradientColorStops: [],
        backgroundOpacity: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: [],
        borderOpacity: [],
        borderRadius: [],
        borderStyle: [],
        borderWidth: [],
        boxShadow: [],
        boxSizing: [],
        container: [],
        cursor: [],
        display: [],
        divideColor: [],
        divideOpacity: [],
        divideStyle: [],
        divideWidth: [],
        fill: [],
        flex: [],
        flexDirection: [],
        flexGrow: [],
        flexShrink: [],
        flexWrap: [],
        float: [],
        clear: [],
        fontFamily: [],
        fontSize: [],
        fontSmoothing: [],
        fontStyle: [],
        fontWeight: [],
        height: [],
        inset: [],
        justifyContent: [],
        letterSpacing: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        margin: [],
        maxHeight: [],
        maxWidth: [],
        minHeight: [],
        minWidth: [],
        objectFit: [],
        objectPosition: [],
        opacity: [],
        order: [],
        outline: [],
        overflow: [],
        overscrollBehavior: [],
        padding: [],
        placeholderColor: [],
        placeholderOpacity: [],
        pointerEvents: [],
        position: [],
        resize: [],
        space: [],
        stroke: [],
        strokeWidth: [],
        tableLayout: [],
        textAlign: [],
        textColor: [],
        textOpacity: [],
        textDecoration: ['hover'],
        textTransform: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: [],
        wordBreak: [],
        zIndex: [],
        gap: [],
        gridAutoFlow: [],
        gridTemplateColumns: [],
        gridColumn: [],
        gridColumnStart: [],
        gridColumnEnd: [],
        gridTemplateRows: [],
        gridRow: [],
        gridRowStart: [],
        gridRowEnd: [],
        transform: [],
        transformOrigin: [],
        scale: [],
        rotate: [],
        translate: [],
        skew: [],
        transitionProperty: [],
        transitionTimingFunction: [],
        transitionDuration: [],
        transitionDelay: [],
        animation: []
    },
    plugins: [],
    corePlugins: {
        container: false
    }
}
