using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using ShopsAndroidWeb.Models;
using System.Text.RegularExpressions;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {

        static bool IsBase64(string base64)
        {
            base64 = base64.Trim();
            return (base64.Length % 4 == 0) && Regex.IsMatch(base64, @"/^(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{2}==)?$/", RegexOptions.None);
        }

        public static string ImageToBase64()
        {
            byte[] imageArray = System.IO.File.ReadAllBytes(@"C:\Users\teraf\source\repos\ShopsAndroidWeb\ShopsAndroidWeb\images\noimage.png");
            string base64 = Convert.ToBase64String(imageArray);
            return base64;
        }

        private readonly EFAppContext _context;

        public ProductsController(EFAppContext context)
        {
            _context = context;
        }
        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            object st = new();
            List<Product>? list = await _context.Products.ToListAsync();
            if (list.Count > 0)
            {
                st = list;
            }
            else if (list.Count <= 0)
            {
                st = "Empty list";
            }
            return Ok(st);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            object? item = null;
            List<Product>? list = await _context.Products.ToListAsync();
            if (id < list.Count && id >= -1)
            {
                var item_find = list.ElementAt(id);
                item = item_find;
            }
            else if (id > list.Count)
            {
                var item_find = list.Last();
                item = item_find;
            }
            else if (id < 0)
            {
                id = 0;
                var item_find = list.ElementAt(id);
                item = item_find;
            }
            return Ok(item);
        }

        [HttpGet]
        [Route("getname/{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            object? item = "Product not find!";
            List<Product> dtos = await _context.Products.ToListAsync();
            List<Product> products = new();
            if (dtos.Count > 0)
            {
                foreach (Product dto in dtos)
                {
                    if (dto.Name != null)
                    {
                        if (dto.Name.Contains(name))
                        {
                            products.Add(dto);
                        }
                    }
                }
            }
            if (products.Count != 0)
            {
                List<Product> products1 = new();
                products1.Add(products[0]);
                if (products1.Count != 0)
                    item = products1;
            }
            return Ok(item);
        }

        [HttpPost]
        [Route("post")]
        public async Task<IActionResult> AddProduct([FromBody] ProductViewModels model)
        {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            string base64Image = model.Image;
            if (IsBase64(base64Image) != true)
            {
                base64Image = ImageToBase64();
            }
            else
            {
                base64Image = model.Image;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
            }
            var product = new Product
            {
                Id = _context.Products.Count() + 1,
                Name = model.Name,
                Description = model.Description,
                Price = decimal.Parse("" + model.Price),
                Image = base64Image,
                TypeProduct = model.TypeProduct,
                Link = model.Link,
                IdentityANDROID = model.IndentityANDROID
            };
            await _context.Products.AddAsync(product);
            _context.SaveChanges();
            return Ok(product.Id);
        }

        [HttpPut]
        [Route("update/{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] Product product)
        {
            int size = _context.Products.Count();
            object res = "";
            if (size != 0)
            {
                Product? result = await _context.Products.FirstOrDefaultAsync(e => e.Id == product.Id);
                if (result != null)
                {
                    result.Name = product.Name;
                    result.Price = product.Price;
                    result.Image = product.Image;
                    result.TypeProduct = product.TypeProduct;
                    result.Description = product.Description;
                    result.Link = product.Link;
                    result.IdentityANDROID = product.IdentityANDROID;

                    res = "Successfull update";
                    _context.SaveChanges();
                }
            }
            else if (size <= 0)
            {
                res = "List empty!";
            }
            return Ok(res);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult RemoveProduct(string name)
        {
            List<Product> dtos = _context.Products.ToList();
            bool deleted = false;
            foreach (Product dto in dtos)
            {
                if (dto.Name == name)
                {
                    deleted = true;
                    _context.Products.Remove(dto);
                    _context.SaveChanges();
                }
            }
            if (!deleted)
            {
                return Ok("Not find this item!");
            }
            else
            {
                return Ok("Successfully deleted");

            }
        }

        [HttpDelete]
        [Route("clear")]
        public async Task<IActionResult> ClearProducts()
        {
            List<Product> dtos = await _context.Products.ToListAsync();
            foreach (Product dto in dtos)
            {
                _context.Products.Remove(dto);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}
