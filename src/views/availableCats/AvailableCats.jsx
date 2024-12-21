import { useEffect, useState } from 'react';
import './AvailableCats.css';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Russian Blue' },
  { name: 'Pumpkin', age: '3', breed: 'Siamese' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Maine Coon' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const results = cats.filter((cat) => (cat.name.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm) && (cat.breed === selectedBreed || !selectedBreed));
    setFilteredCats(results);
  }, [searchTerm, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <input type="text" className="form-control mb-2" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select className="form-select" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Russian Blue">Russian Blue</option>
          <option value="Siamese">Siamese</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Birman">Birman</option>
          <option value="Maine Coon">Maine Coon</option>
        </select>
      </div>
      <div className="mt-2 row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
