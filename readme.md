# Naive User Management

A special program assignment. You can add/edit/delete users. You can also create groups and assign them to users.

# Tech Stack
Backend: PHP Laravel 5.5
Frontend: AngularJS + UI Router

Blade Template engine is not used. Once user lands the first page, all remaining pages and user interactions are done by AngularJS with backend APIs.

# How to Run

## assumptions
docker is required

## steps
 - Make a new directory and enter it, say `root`
 - Create a directory called `db_data`, this is for mariadb.
 - Clone this repo into `root`, enter the repo and run the following command.
 
```sh
docker-compose up
```

Then go to `localhost:3000`

# Domain Model
[Domain Model Diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Designs#R%3Cmxfile%3E%3Cdiagram%20id%3D%2212a36fad-37a3-849a-08b2-7b1a1f202cce%22%20name%3D%22DomainModel%22%3E7Znfb5swEMf%2FGqTuYRWGkqaPSfpjD%2B1UtZu2PbpwAasGR8Zpkv71O2M7BEK2qlnRHqgiFX99Nr77nKOz44WzfH0j6SK7EwlwL%2FCTtRdeekFAAnKO%2F7SyMcooGhkhlSyxRrXwyF7Bir5VlyyBsmGohOCKLZpiLIoCYtXQqJRi1TSbC95864KmsCc8xpTvqz9YojKjjiO%2F1r8ASzP3ZuLbnicaP6dSLAv7Pi8I59Wf6c6pm8valxlNxGpHCq%2B8cCaFUOYpX8%2BA69i6sJlx1wd6t%2BuWUKi3DAjMgBfKl9b1G1z9wi5ObVxAyhXLOS2wNZ2LQj3aHoJtylla4HOMrwSJwgtIxTCWE9uhxALVOGM8uaUbsdQLKxUGyrWmmZDsFael3M6J3VLZtAhGDYtHPRJlH1UJJdrcO29JS7qj64bhLS2VFWLBOV2U7GnrRk5lyoqpUErk1sg5fc04nwkuZBULBzSc2tihu7A%2BGH%2BypYq7BUQOSm7QxA04t4mwcVvHElnVaUdG1iZrpJw1pDbV0%2B3cNW58sMS76Yd79L0AvfK%2F0hw8jHsQrunWz51sQH9VRUmKZ3CRKYRJj51gWcllCIe5Opgf5YLGrEhvK5vLs1p5sE5rSeDYOa82TMaSBArNViiqqAGpqS0EK1QVlGiKH4zdzD%2BNvAgXPsM2qdv40eZSzUSBvlBWMQPMkhXoTHkb4KAbsAUajN7G09kdg%2FOsA2eLHGcVEUPOfbWRd2HLEQCHmtM3jfHyM9ljGe6zDDu4cfoE%2FF6UTDGh55fGtsWzB2TRG7fg%2BHhi0YENOJNAFZx8Gnbe%2BzE6ZH3svPMDHC%2BBw8DxOI7jHr9Bx3scv5cgy6Ec6qkcikirHHIHib%2BWQ6Oz4%2BlfDOXQ8Zt5%2FN%2BUQy6XhnroOGY91kOEDAXRh3HssyByp9OhIvoAkH1WROTQHcGkLDHU38RJ6oUTbFf3RgPWI7Bur3R64dp1WWA2KFaU2bUU%2BUD2n5ENxz2S7bpUaLGDJAV3aEEfmNo8AKe60Liqe6aZyt0JBIpkou%2FVsXn1kNNi404leypOJzc%2FNYZT3x854ZcRLogT7kEydE2fkCpgsGZKjyKnPrmwbTdobNvtMcYt7ctBLlYqxVLG1spGAxefwp%2Fp7dLyuw4dTpRV8F6ay%2BhiaN9xr7Pz8CXwmR81pzDLt6OCndv81kRBa6KwPZFxem%2BiKqW2jndlGTbrHyWMef3LT3j1Gw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22391d92ee-f609-aea2-32d7-f36713fe7c32%22%20name%3D%22Database-ER%22%3E7VZLb5tAEP41XCMexkmPhTjtwZEi%2B9D0uIExrLLsoGUdm%2Fz6zsKuAeOkkSq1PcRCMvPNY2fmmxHrRWl1%2FKZYXd5jDsIL%2FfzoRbdeGAZhcE1%2FBml7ZBkve6BQPLdGA7Dlr2BB36J7nkMzMdSIQvN6CmYoJWR6gjGl8DA126GYnlqzAmbANmNijv7guS579Cb2B%2Fw78KJ0Jwe%2B1Tyx7LlQuJf2PC%2BMdt2vV1fMxbL2TclyPIygaOVFqULU%2FVt1TEGY3rq29X53b2hPeSuQ%2BiMOYe%2FwwsTelm6ypy732enWdaQ58EowSVKyQ6m3VuOTnJVc5GvW4t4c2WhqgZOSEhV%2FJXsmSBUQQGqlLeGm3GTHhUhRoCJAYnfA4LQ1wewxChpye3ClBWfQPTtODNes0S5BFILVDX%2FqUjaOFVMFlwlqjZU1cgXejfIZ2IsSJnghCcvoLCBlYjsHSsPxze4HJ05pVwAr0KolE%2BewtGPQujmye3MYhi5YWJtyNHCLGzvrds6LU%2BiBa3qxdF%2BmPppRL1kFM%2BKpOt3xpvAZzoi6wF1Ts4zLYg07k%2BpiQDY2ewMhdW0nurkveZ6DNKyhZpo9naaqRi51V16c0ENNSP2r2Ispp5TkYJDpMeZKpygpTca75gPxfwAzAx9jKrzMlGXGLcrviAmXf07MckYMq%2Bt9A%2BpzK%2F%2FKVi7if7iV159bOWZq%2Bd9spbuajJiZsQI53SKsSCVw3W5AMM1RrgZNUurK7R3I%2FKu5rpC42lRMtm4XZyiFU%2B2jZaETfhrhKoyNfOT60YWk95Gqz9Ek9v42UB24VxlMrgWUSQHvMzFuvX%2Bh9SdQdZ14maZxiRB7xoOZtNGn8mwpwy%2F%2BNESfvvUa33jOAoXn230eqC96Fqibj1Phl0aGxOHi1psPt%2BNo9Qs%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22b0b9fcd0-fe5e-100f-1f65-16b8d84cd512%22%20name%3D%22Database-Tables%22%3E7Vtdj5s4FP01ea0AD5mZx5JOd6VOpapTaXefKic44K3ByDhN0l%2B%2FNlwHWA8blBBoV56JNHBt%2FHHPOeDjMAu0yg6%2FCVykH3lM2CLw4sMCvVsEgR%2F49%2BqPjhzryDJc1oFE0BgqNYEX%2BoNA0IPojsak7FSUnDNJi25ww%2FOcbGQnhoXg%2B261LWfdXgucECvwssHMjv5BY5nW0YfQa%2BK%2FE5qkpmffg5I13nxLBN%2Fl0N8iQNvqpy7OsGkL6pcpjvm%2BFUJPC7QSnMv6KDusCNO5NWmrr3vfU3oatyC5HHTBQ33Fd8x2MHdcFLuSiBIGKI8mKeWeZgzn6iza8ly%2BQImnzjcpZfEzPvKd7rWUKgvmLEq5oD9UfcxUka8CqlhIwDxY6tYoYyvOuKj6QcTTv50rX3SL0Jcgpbr2k5mi%2F6%2FQR3zoVHzGpTSj5IzhoqTratz6wgyLhOYRl5JnUMnM8n13UIAiijCjSa5iG9UXUYURJJAISQ69KPgnbJVmCM%2BIFEdVBS4IDX2Ohk8Ay74hn7%2BEOmmLeI8BcB74npyabjBXBwB7DwUeLQqoIgv8FBf6UE1KUsw%2BK9XhPNGlkeQF5I6Rrcm1gEHq47XJr9%2FKX1030nmjSnhvIZzROK5abZMi5xXrygJvaJ48172guyb0GXrTIa6a3LJKVKlqjOR6NFxiidcnvhac5rLKWRipj8rsynsTLkI105U695tz9dHVhVzxvJQC0wpRoki1J5pYUSx48UXRiJjZtrURDubHw%2BsEAUIEy2F8QN71fDC3phYfPn24mg%2FrtsZewXYoLbocGI0C51DW0wQC9%2BIJDyPoo7nHd3B%2BfB3nFrDoVrj6Fq45zshtlO6dh7Rq7NeV%2BRiyDgfK2sj%2FKvgDC%2F65RV0z4BdXdN%2Bj%2FYyiR4H0fnxInZovVvNDMEzN%2Fhg3c3vd7tQ8hprvL1LzKJDa63DtJAtnxKYzYsGcRgzZC29nxKY2YkHPAn0GI4bsBbszYmPd6JH3Os4TGDFkr8SdEbvx0u2MrKc0Ygi5pdtNFB3MZsSUNJwR%2B3nUPKURQ6FT803UfDebEUNLC1L4TuxrZcicH5vMj6Ew7PgxZKhyVtrGuF1FBHt%2FzRmyqQ1Zrcafw5DZm27OkI12w79s520UXHt23r7eSu1uGTdE2lOasjt7721uYf8%2FlnGXfd89CqS2zzbLOKfrOXU91J6NQoIbOHOnayOueXRtb4s7Nc%2BnZt8b%2BBXZGNb8zt46d3IeQ86XvcQyCqRLC0ESJ8T4RDX5lCc8x%2BypiUbVG9YkhpylMjNbKORA5Z8Q1sd%2F6eM32myquYrjqUifNGV%2FEymPsPGCd5JrrE79PvOKNU2O9fB61QKhku%2FEhnQzJ430%2FmNdJAjDkn7vtn9Veu9vkV6%2FP73%2B1Ok17y%2B309v3eLo2veq0eTe%2FKmv9AwR6%2Bgc%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

# Database Model

[ER Diagram](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&page=1&title=Designs#R%3Cmxfile%3E%3Cdiagram%20id%3D%2212a36fad-37a3-849a-08b2-7b1a1f202cce%22%20name%3D%22DomainModel%22%3E7Znfb5swEMf%2FGqTuYRWGkqaPSfpjD%2B1UtZu2PbpwAasGR8Zpkv71O2M7BEK2qlnRHqgiFX99Nr77nKOz44WzfH0j6SK7EwlwL%2FCTtRdeekFAAnKO%2F7SyMcooGhkhlSyxRrXwyF7Bir5VlyyBsmGohOCKLZpiLIoCYtXQqJRi1TSbC95864KmsCc8xpTvqz9YojKjjiO%2F1r8ASzP3ZuLbnicaP6dSLAv7Pi8I59Wf6c6pm8valxlNxGpHCq%2B8cCaFUOYpX8%2BA69i6sJlx1wd6t%2BuWUKi3DAjMgBfKl9b1G1z9wi5ObVxAyhXLOS2wNZ2LQj3aHoJtylla4HOMrwSJwgtIxTCWE9uhxALVOGM8uaUbsdQLKxUGyrWmmZDsFael3M6J3VLZtAhGDYtHPRJlH1UJJdrcO29JS7qj64bhLS2VFWLBOV2U7GnrRk5lyoqpUErk1sg5fc04nwkuZBULBzSc2tihu7A%2BGH%2BypYq7BUQOSm7QxA04t4mwcVvHElnVaUdG1iZrpJw1pDbV0%2B3cNW58sMS76Yd79L0AvfK%2F0hw8jHsQrunWz51sQH9VRUmKZ3CRKYRJj51gWcllCIe5Opgf5YLGrEhvK5vLs1p5sE5rSeDYOa82TMaSBArNViiqqAGpqS0EK1QVlGiKH4zdzD%2BNvAgXPsM2qdv40eZSzUSBvlBWMQPMkhXoTHkb4KAbsAUajN7G09kdg%2FOsA2eLHGcVEUPOfbWRd2HLEQCHmtM3jfHyM9ljGe6zDDu4cfoE%2FF6UTDGh55fGtsWzB2TRG7fg%2BHhi0YENOJNAFZx8Gnbe%2BzE6ZH3svPMDHC%2BBw8DxOI7jHr9Bx3scv5cgy6Ec6qkcikirHHIHib%2BWQ6Oz4%2BlfDOXQ8Zt5%2FN%2BUQy6XhnroOGY91kOEDAXRh3HssyByp9OhIvoAkH1WROTQHcGkLDHU38RJ6oUTbFf3RgPWI7Bur3R64dp1WWA2KFaU2bUU%2BUD2n5ENxz2S7bpUaLGDJAV3aEEfmNo8AKe60Liqe6aZyt0JBIpkou%2FVsXn1kNNi404leypOJzc%2FNYZT3x854ZcRLogT7kEydE2fkCpgsGZKjyKnPrmwbTdobNvtMcYt7ctBLlYqxVLG1spGAxefwp%2Fp7dLyuw4dTpRV8F6ay%2BhiaN9xr7Pz8CXwmR81pzDLt6OCndv81kRBa6KwPZFxem%2BiKqW2jndlGTbrHyWMef3LT3j1Gw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22391d92ee-f609-aea2-32d7-f36713fe7c32%22%20name%3D%22Database-ER%22%3E7VZLb5tAEP41XCMexkmPhTjtwZEi%2B9D0uIExrLLsoGUdm%2Fz6zsKuAeOkkSq1PcRCMvPNY2fmmxHrRWl1%2FKZYXd5jDsIL%2FfzoRbdeGAZhcE1%2FBml7ZBkve6BQPLdGA7Dlr2BB36J7nkMzMdSIQvN6CmYoJWR6gjGl8DA126GYnlqzAmbANmNijv7guS579Cb2B%2Fw78KJ0Jwe%2B1Tyx7LlQuJf2PC%2BMdt2vV1fMxbL2TclyPIygaOVFqULU%2FVt1TEGY3rq29X53b2hPeSuQ%2BiMOYe%2FwwsTelm6ypy732enWdaQ58EowSVKyQ6m3VuOTnJVc5GvW4t4c2WhqgZOSEhV%2FJXsmSBUQQGqlLeGm3GTHhUhRoCJAYnfA4LQ1wewxChpye3ClBWfQPTtODNes0S5BFILVDX%2FqUjaOFVMFlwlqjZU1cgXejfIZ2IsSJnghCcvoLCBlYjsHSsPxze4HJ05pVwAr0KolE%2BewtGPQujmye3MYhi5YWJtyNHCLGzvrds6LU%2BiBa3qxdF%2BmPppRL1kFM%2BKpOt3xpvAZzoi6wF1Ts4zLYg07k%2BpiQDY2ewMhdW0nurkveZ6DNKyhZpo9naaqRi51V16c0ENNSP2r2Ispp5TkYJDpMeZKpygpTca75gPxfwAzAx9jKrzMlGXGLcrviAmXf07MckYMq%2Bt9A%2BpzK%2F%2FKVi7if7iV159bOWZq%2Bd9spbuajJiZsQI53SKsSCVw3W5AMM1RrgZNUurK7R3I%2FKu5rpC42lRMtm4XZyiFU%2B2jZaETfhrhKoyNfOT60YWk95Gqz9Ek9v42UB24VxlMrgWUSQHvMzFuvX%2Bh9SdQdZ14maZxiRB7xoOZtNGn8mwpwy%2F%2BNESfvvUa33jOAoXn230eqC96Fqibj1Phl0aGxOHi1psPt%2BNo9Qs%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22b0b9fcd0-fe5e-100f-1f65-16b8d84cd512%22%20name%3D%22Database-Tables%22%3E7Vtdj5s4FP01ea0AD5mZx5JOd6VOpapTaXefKic44K3ByDhN0l%2B%2FNlwHWA8blBBoV56JNHBt%2FHHPOeDjMAu0yg6%2FCVykH3lM2CLw4sMCvVsEgR%2F49%2BqPjhzryDJc1oFE0BgqNYEX%2BoNA0IPojsak7FSUnDNJi25ww%2FOcbGQnhoXg%2B261LWfdXgucECvwssHMjv5BY5nW0YfQa%2BK%2FE5qkpmffg5I13nxLBN%2Fl0N8iQNvqpy7OsGkL6pcpjvm%2BFUJPC7QSnMv6KDusCNO5NWmrr3vfU3oatyC5HHTBQ33Fd8x2MHdcFLuSiBIGKI8mKeWeZgzn6iza8ly%2BQImnzjcpZfEzPvKd7rWUKgvmLEq5oD9UfcxUka8CqlhIwDxY6tYoYyvOuKj6QcTTv50rX3SL0Jcgpbr2k5mi%2F6%2FQR3zoVHzGpTSj5IzhoqTratz6wgyLhOYRl5JnUMnM8n13UIAiijCjSa5iG9UXUYURJJAISQ69KPgnbJVmCM%2BIFEdVBS4IDX2Ohk8Ay74hn7%2BEOmmLeI8BcB74npyabjBXBwB7DwUeLQqoIgv8FBf6UE1KUsw%2BK9XhPNGlkeQF5I6Rrcm1gEHq47XJr9%2FKX1030nmjSnhvIZzROK5abZMi5xXrygJvaJ48172guyb0GXrTIa6a3LJKVKlqjOR6NFxiidcnvhac5rLKWRipj8rsynsTLkI105U695tz9dHVhVzxvJQC0wpRoki1J5pYUSx48UXRiJjZtrURDubHw%2BsEAUIEy2F8QN71fDC3phYfPn24mg%2FrtsZewXYoLbocGI0C51DW0wQC9%2BIJDyPoo7nHd3B%2BfB3nFrDoVrj6Fq45zshtlO6dh7Rq7NeV%2BRiyDgfK2sj%2FKvgDC%2F65RV0z4BdXdN%2Bj%2FYyiR4H0fnxInZovVvNDMEzN%2Fhg3c3vd7tQ8hprvL1LzKJDa63DtJAtnxKYzYsGcRgzZC29nxKY2YkHPAn0GI4bsBbszYmPd6JH3Os4TGDFkr8SdEbvx0u2MrKc0Ygi5pdtNFB3MZsSUNJwR%2B3nUPKURQ6FT803UfDebEUNLC1L4TuxrZcicH5vMj6Ew7PgxZKhyVtrGuF1FBHt%2FzRmyqQ1Zrcafw5DZm27OkI12w79s520UXHt23r7eSu1uGTdE2lOasjt7721uYf8%2FlnGXfd89CqS2zzbLOKfrOXU91J6NQoIbOHOnayOueXRtb4s7Nc%2BnZt8b%2BBXZGNb8zt46d3IeQ86XvcQyCqRLC0ESJ8T4RDX5lCc8x%2BypiUbVG9YkhpylMjNbKORA5Z8Q1sd%2F6eM32myquYrjqUifNGV%2FEymPsPGCd5JrrE79PvOKNU2O9fB61QKhku%2FEhnQzJ430%2FmNdJAjDkn7vtn9Veu9vkV6%2FP73%2B1Ok17y%2B309v3eLo2veq0eTe%2FKmv9AwR6%2Bgc%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

[DB Tables](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&page=2&title=Designs#R%3Cmxfile%3E%3Cdiagram%20id%3D%2212a36fad-37a3-849a-08b2-7b1a1f202cce%22%20name%3D%22DomainModel%22%3E7Znfb5swEMf%2FGqTuYRWGkqaPSfpjD%2B1UtZu2PbpwAasGR8Zpkv71O2M7BEK2qlnRHqgiFX99Nr77nKOz44WzfH0j6SK7EwlwL%2FCTtRdeekFAAnKO%2F7SyMcooGhkhlSyxRrXwyF7Bir5VlyyBsmGohOCKLZpiLIoCYtXQqJRi1TSbC95864KmsCc8xpTvqz9YojKjjiO%2F1r8ASzP3ZuLbnicaP6dSLAv7Pi8I59Wf6c6pm8valxlNxGpHCq%2B8cCaFUOYpX8%2BA69i6sJlx1wd6t%2BuWUKi3DAjMgBfKl9b1G1z9wi5ObVxAyhXLOS2wNZ2LQj3aHoJtylla4HOMrwSJwgtIxTCWE9uhxALVOGM8uaUbsdQLKxUGyrWmmZDsFael3M6J3VLZtAhGDYtHPRJlH1UJJdrcO29JS7qj64bhLS2VFWLBOV2U7GnrRk5lyoqpUErk1sg5fc04nwkuZBULBzSc2tihu7A%2BGH%2BypYq7BUQOSm7QxA04t4mwcVvHElnVaUdG1iZrpJw1pDbV0%2B3cNW58sMS76Yd79L0AvfK%2F0hw8jHsQrunWz51sQH9VRUmKZ3CRKYRJj51gWcllCIe5Opgf5YLGrEhvK5vLs1p5sE5rSeDYOa82TMaSBArNViiqqAGpqS0EK1QVlGiKH4zdzD%2BNvAgXPsM2qdv40eZSzUSBvlBWMQPMkhXoTHkb4KAbsAUajN7G09kdg%2FOsA2eLHGcVEUPOfbWRd2HLEQCHmtM3jfHyM9ljGe6zDDu4cfoE%2FF6UTDGh55fGtsWzB2TRG7fg%2BHhi0YENOJNAFZx8Gnbe%2BzE6ZH3svPMDHC%2BBw8DxOI7jHr9Bx3scv5cgy6Ec6qkcikirHHIHib%2BWQ6Oz4%2BlfDOXQ8Zt5%2FN%2BUQy6XhnroOGY91kOEDAXRh3HssyByp9OhIvoAkH1WROTQHcGkLDHU38RJ6oUTbFf3RgPWI7Bur3R64dp1WWA2KFaU2bUU%2BUD2n5ENxz2S7bpUaLGDJAV3aEEfmNo8AKe60Liqe6aZyt0JBIpkou%2FVsXn1kNNi404leypOJzc%2FNYZT3x854ZcRLogT7kEydE2fkCpgsGZKjyKnPrmwbTdobNvtMcYt7ctBLlYqxVLG1spGAxefwp%2Fp7dLyuw4dTpRV8F6ay%2BhiaN9xr7Pz8CXwmR81pzDLt6OCndv81kRBa6KwPZFxem%2BiKqW2jndlGTbrHyWMef3LT3j1Gw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22391d92ee-f609-aea2-32d7-f36713fe7c32%22%20name%3D%22Database-ER%22%3E7VZLb5tAEP41XCMexkmPhTjtwZEi%2B9D0uIExrLLsoGUdm%2Fz6zsKuAeOkkSq1PcRCMvPNY2fmmxHrRWl1%2FKZYXd5jDsIL%2FfzoRbdeGAZhcE1%2FBml7ZBkve6BQPLdGA7Dlr2BB36J7nkMzMdSIQvN6CmYoJWR6gjGl8DA126GYnlqzAmbANmNijv7guS579Cb2B%2Fw78KJ0Jwe%2B1Tyx7LlQuJf2PC%2BMdt2vV1fMxbL2TclyPIygaOVFqULU%2FVt1TEGY3rq29X53b2hPeSuQ%2BiMOYe%2FwwsTelm6ypy732enWdaQ58EowSVKyQ6m3VuOTnJVc5GvW4t4c2WhqgZOSEhV%2FJXsmSBUQQGqlLeGm3GTHhUhRoCJAYnfA4LQ1wewxChpye3ClBWfQPTtODNes0S5BFILVDX%2FqUjaOFVMFlwlqjZU1cgXejfIZ2IsSJnghCcvoLCBlYjsHSsPxze4HJ05pVwAr0KolE%2BewtGPQujmye3MYhi5YWJtyNHCLGzvrds6LU%2BiBa3qxdF%2BmPppRL1kFM%2BKpOt3xpvAZzoi6wF1Ts4zLYg07k%2BpiQDY2ewMhdW0nurkveZ6DNKyhZpo9naaqRi51V16c0ENNSP2r2Ispp5TkYJDpMeZKpygpTca75gPxfwAzAx9jKrzMlGXGLcrviAmXf07MckYMq%2Bt9A%2BpzK%2F%2FKVi7if7iV159bOWZq%2Bd9spbuajJiZsQI53SKsSCVw3W5AMM1RrgZNUurK7R3I%2FKu5rpC42lRMtm4XZyiFU%2B2jZaETfhrhKoyNfOT60YWk95Gqz9Ek9v42UB24VxlMrgWUSQHvMzFuvX%2Bh9SdQdZ14maZxiRB7xoOZtNGn8mwpwy%2F%2BNESfvvUa33jOAoXn230eqC96Fqibj1Phl0aGxOHi1psPt%2BNo9Qs%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22b0b9fcd0-fe5e-100f-1f65-16b8d84cd512%22%20name%3D%22Database-Tables%22%3E7Vtdj5s4FP01ea0AD5mZx5JOd6VOpapTaXefKic44K3ByDhN0l%2B%2FNlwHWA8blBBoV56JNHBt%2FHHPOeDjMAu0yg6%2FCVykH3lM2CLw4sMCvVsEgR%2F49%2BqPjhzryDJc1oFE0BgqNYEX%2BoNA0IPojsak7FSUnDNJi25ww%2FOcbGQnhoXg%2B261LWfdXgucECvwssHMjv5BY5nW0YfQa%2BK%2FE5qkpmffg5I13nxLBN%2Fl0N8iQNvqpy7OsGkL6pcpjvm%2BFUJPC7QSnMv6KDusCNO5NWmrr3vfU3oatyC5HHTBQ33Fd8x2MHdcFLuSiBIGKI8mKeWeZgzn6iza8ly%2BQImnzjcpZfEzPvKd7rWUKgvmLEq5oD9UfcxUka8CqlhIwDxY6tYoYyvOuKj6QcTTv50rX3SL0Jcgpbr2k5mi%2F6%2FQR3zoVHzGpTSj5IzhoqTratz6wgyLhOYRl5JnUMnM8n13UIAiijCjSa5iG9UXUYURJJAISQ69KPgnbJVmCM%2BIFEdVBS4IDX2Ohk8Ay74hn7%2BEOmmLeI8BcB74npyabjBXBwB7DwUeLQqoIgv8FBf6UE1KUsw%2BK9XhPNGlkeQF5I6Rrcm1gEHq47XJr9%2FKX1030nmjSnhvIZzROK5abZMi5xXrygJvaJ48172guyb0GXrTIa6a3LJKVKlqjOR6NFxiidcnvhac5rLKWRipj8rsynsTLkI105U695tz9dHVhVzxvJQC0wpRoki1J5pYUSx48UXRiJjZtrURDubHw%2BsEAUIEy2F8QN71fDC3phYfPn24mg%2FrtsZewXYoLbocGI0C51DW0wQC9%2BIJDyPoo7nHd3B%2BfB3nFrDoVrj6Fq45zshtlO6dh7Rq7NeV%2BRiyDgfK2sj%2FKvgDC%2F65RV0z4BdXdN%2Bj%2FYyiR4H0fnxInZovVvNDMEzN%2Fhg3c3vd7tQ8hprvL1LzKJDa63DtJAtnxKYzYsGcRgzZC29nxKY2YkHPAn0GI4bsBbszYmPd6JH3Os4TGDFkr8SdEbvx0u2MrKc0Ygi5pdtNFB3MZsSUNJwR%2B3nUPKURQ6FT803UfDebEUNLC1L4TuxrZcicH5vMj6Ew7PgxZKhyVtrGuF1FBHt%2FzRmyqQ1Zrcafw5DZm27OkI12w79s520UXHt23r7eSu1uGTdE2lOasjt7721uYf8%2FlnGXfd89CqS2zzbLOKfrOXU91J6NQoIbOHOnayOueXRtb4s7Nc%2BnZt8b%2BBXZGNb8zt46d3IeQ86XvcQyCqRLC0ESJ8T4RDX5lCc8x%2BypiUbVG9YkhpylMjNbKORA5Z8Q1sd%2F6eM32myquYrjqUifNGV%2FEymPsPGCd5JrrE79PvOKNU2O9fB61QKhku%2FEhnQzJ430%2FmNdJAjDkn7vtn9Veu9vkV6%2FP73%2B1Ok17y%2B309v3eLo2veq0eTe%2FKmv9AwR6%2Bgc%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

# APIs Available

## Overview

### /appusers
 - /appusers?expand=all: GET, a full list of appusers, if expand=all is appended, its related groups will be returned together
 - /appusers/save: POST, edit an existed user
 - /appusers/create: POST, add an new user
 - /appusers/{id}: GET, retreieve detail of a specific user
 - /appusers/{id}/delete: GET, delete a specific user

### /groups
 - /groups?expand=all: GET, a full list of groups, if expand=all is appended, users of each group will be returned together
 - /groups/create: POST, add an new group
 - /groups/{id}: GET, retreieve detail of a specific group
 - /groups/{id}/delete: GET, delete a specific group

## Response JSON format
```javascript
    {
        "success": true/false,
        "data": {
            // requested data will be placed here, depending on the API
            // the following two fields will not exist if success == true 
            "error_key": "string",
            "errors": {
                // content of details, can be customized for each API
            }
        },
        //general error message, will not exist if success == true
        "error_messages": [
            "Something went wrong."
        ]
    }      
```
## Sample Request and Responses

### /appusers
 - /appusers?expand=all: GET, a full list of appusers, if expand=all is appended, its related groups will be returned together
  ```javascript
    {
    "success": true,
    "data": [
        {
        "id": 23,
        "name": "Amic",
        "created_at": "2017-10-29 17:05:17",
        "updated_at": "2017-10-29 17:05:17",
        "groups": []
        },
        {
        "id": 24,
        "name": "Tobic",
        "created_at": "2017-10-29 17:05:27",
        "updated_at": "2017-10-29 17:05:27",
        "groups": [
            {
            "id": 3,
            "name": "administrator",
            "created_at": "2017-10-29 15:59:30",
            "updated_at": "2017-10-29 15:59:30",
            "pivot": {
                "appuser_id": 24,
                "group_id": 3,
                "created_at": "2017-10-29 17:05:27",
                "updated_at": "2017-10-29 17:05:27"
            }
            },
            {
            "id": 7,
            "name": "reporters",
            "created_at": "2017-10-29 16:00:44",
            "updated_at": "2017-10-29 16:00:44",
            "pivot": {
                "appuser_id": 24,
                "group_id": 4,
                "created_at": "2017-10-29 17:05:27",
                "updated_at": "2017-10-29 17:05:27"
            }
            }
        ]
        }
    ]
    }  
  ```

 - /appusers/save: POST, edit an existed user
  - POST Data
  ```javascript
    {
        id: 23
        name: "Amic Trump",
        // group ids
        groups: [
            1,
            7,
            9
        ]
    }
  ```
  - Response
  ```javascript
  {
        "success": true,
        "data": {
            "id": 23,
            "name": "Amic Trump",
            "created_at": "2017-10-29 16:25:19",
            "updated_at": "2017-10-29 16:25:19",
            "groups": [{
                "id": 1,
                "name": "random_group798169836",
                "created_at": "2017-10-29 15:58:27",
                "updated_at": "2017-10-29 15:58:27",
                "pivot": {
                    "appuser_id": 8,
                    "group_id": 1,
                    "created_at": "2017-10-29 21:54:22",
                    "updated_at": "2017-10-29 21:54:22"
                }
            }, {
                "id": 2,
                "name": "random_group1346310833",
                "created_at": "2017-10-29 15:59:10",
                "updated_at": "2017-10-29 15:59:10",
                "pivot": {
                    "appuser_id": 8,
                    "group_id": 2,
                    "created_at": "2017-10-29 21:54:22",
                    "updated_at": "2017-10-29 21:54:22"
                }
            }]
        }
    }
  ```

 - /appusers/create: POST, add an new user
  - POST Data
  ```javascript
      {
        name: "Micheal Trump",
        // group ids
        groups: [
            2,
            9
        ]
    }
  ```
  - Response
  The same as response in `/appusers/save`

 - /appusers/{id}: GET, retreieve detail of a specific user
  ```javascript
    {
    "success": true,
    "data": {
        "id": 24,
        "name": "ugh85j47u4ctZ5",
        "created_at": "2017-10-29 17:05:27",
        "updated_at": "2017-10-29 17:05:27",
        "groups": [
        {
            "id": 1,
            "name": "random_group798169836",
            "created_at": "2017-10-29 15:58:27",
            "updated_at": "2017-10-29 15:58:27",
            "pivot": {
            "appuser_id": 24,
            "group_id": 1,
            "created_at": "2017-10-29 17:05:27",
            "updated_at": "2017-10-29 17:05:27"
            }
        },
        {
            "id": 4,
            "name": "random_group1017008722",
            "created_at": "2017-10-29 16:00:44",
            "updated_at": "2017-10-29 16:00:44",
            "pivot": {
            "appuser_id": 24,
            "group_id": 4,
            "created_at": "2017-10-29 17:05:27",
            "updated_at": "2017-10-29 17:05:27"
            }
        }
        ]
    }
    }    
  ```

 - /appusers/{id}/delete: GET, delete a specific user
  ```javascript
  {"success":true,"data":[]}
  ```

### /groups
 - /groups?expand=all: GET, a full list of groups, if expand=all is appended, users of each group will be returned together
 - /groups/create: POST, add an new group
  - POST Data
   ```javascript
   {
       name: 'Secretary'
   }
  ```
  - Response
  ```javascript
    {"success":true,"data":{"name":"Secretary","updated_at":"2017-10-29 22:00:23","created_at":"2017-10-29 22:00:23","id":20}}
  ```  
  
 - /groups/{id}: GET, retreieve detail of a specific group
   ```javascript
    {
    "success": true,
    "data": {
        "id": 4,
        "name": "random_group1017008722",
        "created_at": "2017-10-29 16:00:44",
        "updated_at": "2017-10-29 16:00:44",
        "appusers": [
        {
            "id": 24,
            "name": "random_user_ugh85j47u4ctZ5",
            "created_at": "2017-10-29 17:05:27",
            "updated_at": "2017-10-29 17:05:27",
            "pivot": {
            "group_id": 4,
            "appuser_id": 24,
            "created_at": "2017-10-29 17:05:27",
            "updated_at": "2017-10-29 17:05:27"
            }
        },
        {
            "id": 27,
            "name": "random_user_ugTbSUnTlTfMrW",
            "created_at": "2017-10-29 17:18:41",
            "updated_at": "2017-10-29 17:18:41",
            "pivot": {
            "group_id": 4,
            "appuser_id": 27,
            "created_at": "2017-10-29 17:18:41",
            "updated_at": "2017-10-29 17:18:41"
            }
        },
        {
            "id": 35,
            "name": "random_user_ugwQeaAO51j9MM",
            "created_at": "2017-10-29 17:40:02",
            "updated_at": "2017-10-29 17:40:02",
            "pivot": {
            "group_id": 4,
            "appuser_id": 35,
            "created_at": "2017-10-29 17:40:02",
            "updated_at": "2017-10-29 17:40:02"
            }
        }
        ]
    }
    } 
  ```
 - /groups/{id}/delete: GET, delete a specific group
   ```javascript
  {"success":true,"data":[]}
  ```