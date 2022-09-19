const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-1.jpeg?raw=true",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-2.jpeg?raw=true",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-3.jpeg?raw=true",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-4.jpeg?raw=true",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-5.jpeg?raw=true",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-6.jpeg?raw=true",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-7.jpeg?raw=true",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-8.jpeg?raw=true",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/final/images/item-9.jpeg?raw=true",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
     {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/469042ea8e509b971deb123d946a62aaad1369ee/08-menu/setup/images/item-10.jpeg?raw=true",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const menuCenter = document.querySelector('.item-location');
  const btnContainer=document.querySelector('.btn-container');
  
  window.addEventListener('DOMContentLoaded', function(){
    renderItems(menu);
    renderBtns()
  });
  
  function renderItems(menuItems){
    let menuItem=menuItems.map((item)=>{
    return `
   <article class="menu-item">
          <img src=${item.img} class='photo' alt="${item.title}" />
          <div class='item-info'>
            <header class="item-header">
            <h4>${item.title}</h4
              <h4 class='price'>$${item.price}</h4>
            </header>
            <p class='item-text'>
              ${item.desc}</p>
          </div>
          </article> `
    
  });
  menuItem=menuItem.join('')
    menuCenter.innerHTML=menuItem; 
  }
  
  function renderBtns(){
    const categories=menu.reduce(
      function(values,item){
      if(!values.includes(item.category)){
        values.push(item.category)
      }
      return values
    },['all'])
   
    const categoryBtns=categories.map((category)=>{
       return  `<button class='filter-btn' data-value=${category}>${category}</button>`                              
  }).join('');
    console.log(categoryBtns)
    btnContainer.innerHTML = categoryBtns;
    
    const filterBtns= document.querySelectorAll('.filter-btn');
    //filter btns
  filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const category= e.currentTarget.dataset.value;
      const menuCategory= menu.filter((menuItem)=>{
    
          if(menuItem.category === category)  {
            return menuItem
          }
      });
      if(category === 'all'){
        renderItems(menu);
      } else {
       renderItems(menuCategory);
      }
    })
  })
  }