import { Routes, Route } from 'react-router-dom';
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { AnimeShow } from './AnimeShow';
import { Login } from './Login';
import { Logout } from './Logout';
import { Signup } from './Signup';
import { Home } from './Home';
import { Profile } from './Profile';
import { useParams } from 'react-router-dom';

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<ProductsIndex />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/anime/:id" element={<AnimeShow />} />
        <Route path="/profile/current" element={<Profile />} />
      </Routes>
    </div>
  );
}
