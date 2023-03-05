const Loading = ({setLoading}) => {
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 5000)
      }, []);
    return(
        <>
        hola</>
    )
}

export default Loading