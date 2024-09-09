import './App.css';
import { Head } from './Head';
import { Order } from './Order';
import { Recipe } from './Recipe';

function App() {

  const recipes = [
    {
      id: 1,
      title: 'Steak',
      description: 'The steak, juicy and perfectly grilled to your desired level of doneness, has a crispy, caramelized crust that locks in its rich, savory flavor.',
      img: 'https://media.istockphoto.com/id/2076353107/photo/steak-frites.jpg?s=2048x2048&w=is&k=20&c=cF7Gn4Urg6pG7deXvCiOGklsHcSrFW3-a4aKMzvXCjM=',
      stock: 8
    }, {
      id: 2,
      title: 'Alfredo Pasta',
      description: 'Creamy fettuccine pasta tossed in a rich Parmesan cheese sauce with butter and a hint of garlic. Perfectly velvety and delicious.',
      img: 'https://cdn.shopify.com/s/files/1/0521/1763/5242/files/pasta_alfredo_hero_5_1024x1024.jpg?v=1656573455',
      stock: 3
    }, {
      id: 3,
      title: 'Pizza Margherita',
      description: 'Classic Italian pizza topped with fresh mozzarella, ripe tomatoes, and aromatic basil leaves on a crispy, wood-fired crust. Simple, fresh, and flavorful.',
      img: 'https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Pizza-Margherita-750x500.jpg',
      stock: 3
    }, {
      id: 4,
      title: 'Vitello Tonnato',
      description: 'Thinly sliced veal served chilled with a creamy tuna-caper sauce, garnished with lemon and capers. A light and flavorful Italian classic.',
      img: 'https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Vitello-Tonnato-750x500.jpg',
      stock: 3
    }, {
      id: 5,
      title: 'Pannacotta',
      description: 'Silky, creamy Italian dessert made with sweetened cream, vanilla, and gelatin, elegantly served with a fresh berry coulis or caramel drizzle.',
      img: 'https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Pannacotta-750x500.jpg',
      stock: 0
    }, {
      id: 6,
      title: 'Tiramisù',
      description: 'Classic Italian dessert layered with espresso-soaked ladyfingers, rich mascarpone cream, and a dusting of cocoa. Irresistibly light and luscious.',
      img: 'https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Tiramis%C3%B9-750x500.jpg',
      stock: 1
    },
  ]

  return (
    <div>
      <Head />
      <div className="parent-container">
        {recipes?.map((dishes) => <Recipe dishes={dishes} />)}
      </div>
      <Order />
    </div>
  );
}

export default App;