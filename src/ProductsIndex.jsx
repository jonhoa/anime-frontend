export function ProductsIndex(props) { 
  console.log(props.items);

  return (
    props.items.map(items => (
      <div key ={items.id}>
        <img src ={items.image_url} width ="300" height="300"></img>
        <p align="right">{items.description}</p>
      </div>
    ))
  );
}
