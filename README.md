# Advani-Stock-Exchange-Listing-Page
- Advani company has created their own platform for displaying various stocks from NSE and BSE exchange and also from various sectors.
## **What are the various Actions and Consequences a user has to undergo?**
1.  Select the following sorting options and see the stocks getting sorted:
    1.  Pricing       
    2.  Growth     
2.  Select any filter based on the Exchange:  
    1.  NSE      
    2.  BSE      
3.  Select any filter based on the industrial sector:  
    1.  Finance     
    2.  Pharma     
    3.  Power    
The stocks are listed based on the filters applied

### Endpoint 1: Get the stocks sorted by pricing
```
<http://localhost:3000/stocks/sort/pricing?pricing=low-to-high>

```
### Endpoint 2: Get the stocks sorted based on their Growth.
```
<http://localhost:3000/stocks/sort/growth?growth=high-to-low>
```
### Endpoint 3: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)
```
<http://localhost:3000/stocks/filter/exchange?exchange=nse>
```
### Endpoint 4: Filter the stocks based on the Industrial Sector.
```
<http://localhost:3000/stocks/filter/industry?industry=pharma>
```
### Endpoint 5: Send all available stocks
```
<http://localhost:3000/stocks>
```


  **Deployed Link:**  [Advani-Stock-Exchange-Listing-Page](https://advani-stock-exchange-listing-page.vercel.app/stocks/)
  
  **Note:** Check API endpoints on the deployed link or use this frontend application - [UI](https://bd2-stock-listing.vercel.app/) to API response.
