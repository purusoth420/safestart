import { signal } from "@preact/signals-react";
import "../assets/styles/page_layout.scss";
import "../assets/styles/landing_page.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard"; 
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardMedia, CardContent, Typography, Input } from '@mui/material'
const LandingPage = () => {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
 
  useEffect(() => {
    handleProduct()
  }, [])



  async function handleProduct() {
    try {
      await axios.get('https://fakestoreapi.com/products').then((res) => {
        setProducts(res.data)
        setFiltered(res.data)
      })
    } catch (error) {
      console.log('apierror', error);
    }
  }

  function handleFilter(e) {
    const { value } = e.target
    console.log('value',value);
    const filtered = products.filter((x) => x.title.toLowerCase().includes(value?.toLowerCase()))
    console.log('fil',filtered);
    setFiltered(filtered)
  }


  return (
    <div className="landing-background">
      <section className="header">
        <div>
          {" "}
          <SpaceDashboardIcon className="icon" />
          <span>Dashboard</span>
        </div>
        <Input onChange={(e) => handleFilter(e)} sx={{ width: '30%' }} placeholder="Search..." />
      </section>
      <section className="content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {
          filtered?.map((x) => {
            return <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="250" width={'auto'} image={x?.image} />
              <CardContent>
                <CardHeader title={x?.title.replace(/^.{1}/g, x?.title[0].toUpperCase())} />
                <Typography variant="body2" color="text.secondary">
                  {x?.description}
                </Typography>
              </CardContent>
            </Card>
          })
        }
      </section>
    </div>
  );
};

export default LandingPage;
