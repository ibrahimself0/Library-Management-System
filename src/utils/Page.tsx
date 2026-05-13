interface PageProps {
    children: React.ReactElement[];
}
function Page(props: PageProps) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Page;