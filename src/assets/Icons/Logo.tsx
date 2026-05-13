export default function Logo(props: { className: string }) {
    return (
        <svg
            width="104"
            height="140"
            viewBox="0 0 104 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g clipPath="url(#clip0_2_525)">
                <path
                    d="M52 1.5C79.9464 1.5 102.5 23.2691 102.5 50C102.5 76.7309 79.9464 98.5 52 98.5C24.0536 98.5 1.5 76.7309 1.5 50C1.5 23.2691 24.0536 1.5 52 1.5Z"
                    stroke="#E7E4D8"
                    strokeWidth="3"
                />

                <path d="M47 20V70" stroke="#E7E4D8" strokeWidth="8" />

                <path d="M21 80H82" stroke="#E7E4D8" strokeWidth="8" />

                <path d="M31 20V69.5" stroke="#E7E4D8" strokeWidth="8" />

                <path
                    d="M58.2 47.6L73.1999 67.6"
                    stroke="#E7E4D8"
                    strokeWidth="8"
                />
            </g>

            <text
                x="52"
                y="125"
                textAnchor="middle"
                fill="#E7E4D8"
                fontSize="18"
                fontFamily="'Happy Monkey', cursive"
            >
                Shelfify
            </text>

            <defs>
                <clipPath id="clip0_2_525">
                    <rect width="104" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}