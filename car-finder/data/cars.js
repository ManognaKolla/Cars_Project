const cars = [
    {
        id: 1,
        name: "Tesla Model S",
        brand: "Tesla",
        price: 80000,
        fuel: "Electric",
        seats: 5,
        images: [
            "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/nfe5fngvxblpc0xfpq7d",
            "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/tesla-model-s-my22-index-1.png",
            "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/tesla-model-s-my22-index-2.png"
        ]
    },
    {
        id: 2,
        name: "BMW X5",
        brand: "BMW",
        price: 65000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-X5-280720231245.jpg",
            "https://images.carexpert.com.au/app/uploads/2023/06/2024-BMW-X5-xDrive30d-HERO.jpg",
            "https://images.carexpert.com.au/crop/800/500/vehicles/source-g/7/4/74c64a97.jpg"
        ]
    },
    {
        id: 3,
        name: "Toyota Camry",
        brand: "Toyota",
        price: 30000,
        fuel: "Hybrid",
        seats: 5,
        images: [
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_toyota_camry_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_toyota_camry_dashboard.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_toyota_camry_rearview.jpg"
        ]
    },
    {
        id: 4,
        name: "Hyundai Elantra",
        brand: "Hyundai",
        price: 22000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://cars.usnews.com/static/images/Auto/izmo/i159615375/2024_hyundai_elantra_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615375/2024_hyundai_elantra_dashboard.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615375/2024_hyundai_elantra_rearview.jpg"
        ]
    },
    {
        id: 5,
        name: "Ford F-150",
        brand: "Ford",
        price: 40000,
        fuel: "Diesel",
        seats: 5,
        images: [
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2024/collections/dm/22_FRD_F150_LTS_RPOD_200495_V001.jpg",
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2024/collections/dm/22_FRD_F150_LTS_RPOD_200495_V002.jpg",
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2024/collections/dm/22_FRD_F150_LTS_RPOD_200495_V003.jpg"
        ]
    },
    {
        id: 6,
        name: "Chevrolet Bolt",
        brand: "Chevrolet",
        price: 32000,
        fuel: "Electric",
        seats: 5,
        images: [
            "https://www.freepik.com/free-photos-vectors/chevrolet-bolt",
            "https://media.ed.edmunds-media.com/chevrolet/bolt-ev/2023/oem/2023_chevrolet_bolt-ev_angularfront.jpg",
            "https://media.ed.edmunds-media.com/chevrolet/bolt-ev/2023/oem/2023_chevrolet_bolt-ev_rearview.jpg"
        ]
    },
    {
        id: 7,
        name: "Honda Civic",
        brand: "Honda",
        price: 24000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/honda-cars/civic/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_honda_civic_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_honda_civic_dashboard.jpg"
        ]
    },
    {
        id: 8,
        name: "Kia Seltos",
        brand: "Kia",
        price: 23000,
        fuel: "Diesel",
        seats: 5,
        images: [
            "https://www.carwale.com/kia-cars/seltos/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_kia_seltos_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_kia_seltos_dashboard.jpg"
        ]
    },
    {
        id: 9,
        name: "Audi A4",
        brand: "Audi",
        price: 55000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/audi-cars/a4/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_audi_a4_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_audi_a4_dashboard.jpg"
        ]
    },
    {
        id: 10,
        name: "Nissan Leaf",
        brand: "Nissan",
        price: 29000,
        fuel: "Electric",
        seats: 5,
        images: [
            "https://www.cardekho.com/nissan/leaf/pictures",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_nissan_leaf_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_nissan_leaf_dashboard.jpg"
        ]
    },
    {
        id: 11,
        name: "Mercedes C-Class",
        brand: "Mercedes",
        price: 60000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/mercedes-benz-cars/c-class/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_mercedes_c-class_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_mercedes_c-class_dashboard.jpg"
        ]
    },
    {
        id: 12,
        name: "Volkswagen Passat",
        brand: "Volkswagen",
        price: 27000,
        fuel: "Diesel",
        seats: 5,
        images: [
            "https://media.ed.edmunds-media.com/volkswagen/passat/2022/oem/2022_volkswagen_passat_sedan_limited-edition_fq_oem_1_1600.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_volkswagen_passat_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_volkswagen_passat_dashboard.jpg"
        ]
    },
    {
        id: 13,
        name: "Renault Duster",
        brand: "Renault",
        price: 20000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/renault-cars/new-duster/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_renault_duster_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_renault_duster_dashboard.jpg"
        ]
    },
    {
        id: 14,
        name: "Tata Nexon",
        brand: "Tata",
        price: 18000,
        fuel: "Electric",
        seats: 5,
        images: [
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_tata_nexon_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_tata_nexon_dashboard.jpg"
        ]
    },
    {
        id: 15,
        name: "Skoda Kodiaq",
        brand: "Skoda",
        price: 35000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/skoda-cars/kodiaq/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_skoda_kodiaq_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_skoda_kodiaq_dashboard.jpg"
        ]
    },
    {
        id: 16,
        name: "Mahindra Thar",
        brand: "Mahindra",
        price: 25000,
        fuel: "Diesel",
        seats: 4,
        images: [
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_mahindra_thar_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_mahindra_thar_dashboard.jpg"
        ]
    },
    {
        id: 17,
        name: "Suzuki Swift",
        brand: "Suzuki",
        price: 15000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://www.carwale.com/maruti-suzuki-cars/swift/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_suzuki_swift_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_suzuki_swift_dashboard.jpg"
        ]
    },
    {
        id: 18,
        name: "Volvo XC60",
        brand: "Volvo",
        price: 50000,
        fuel: "Hybrid",
        seats: 5,
        images: [
            "https://www.carwale.com/Volvo-cars/XC60/images/",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_volvo_xc60_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_volvo_xc60_dashboard.jpg"
        ]
    },
    {
        id: 19,
        name: "Jeep Compass",
        brand: "Jeep",
        price: 34000,
        fuel: "Diesel",
        seats: 5,
        images: [
            "https://www.jeep-india.com/new-compass.html",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_jeep_compass_angularfront.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159615663/2024_jeep_compass_dashboard.jpg"
        ]
    },
    {
        id: 20,
        name: "MG Hector",
        brand: "MG",
        price: 28000,
        fuel: "Petrol",
        seats: 5,
        images: [
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-front-three-quarter-4.jpeg",
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-rear-three-quarter-2.jpeg",
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-interior-dashboard-1.jpeg"
        ]
    }
];

export default cars;
