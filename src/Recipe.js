export function Recipe({ dishes }) {
    return (
        <div className="recipe">
            <img className="product-image" src={dishes.img} />
            <div className="product-info">
                <h3>{dishes?.title}</h3>
                <p>{(dishes?.description.slice(0, 80))}...</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <span style={{
                        backgroundColor: dishes?.stock == 0 ? 'lightcoral' : '#fbcd00',
                        borderRadius: '16px',
                        padding: '6px',
                        textAlign: 'center',
                        margin: '2px',
                        border: '2px solid white',
                        color: dishes?.stock == 0 ? 'white' : 'black'
                    }}>{dishes?.stock == 0 ? "Out of stock" : dishes.stock}</span>
                </div>
            </div>
        </div>
    )
}