
export function Home(props) { 
  return (
    props.items.map(items => (
      <div key ={items.id}>
        <img src ={items.image_url} width ="300" height="300"></img>
      </div>
    ))
  );
}
