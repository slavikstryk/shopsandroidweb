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
            return (base64.Length % 4 == 0) && Regex.IsMatch(base64, @"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$", RegexOptions.None);
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
#pragma warning disable CS8604 // Possible null reference argument.
            List<Product>? list = await _context.Products.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
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
#pragma warning disable CS8604 // Possible null reference argument.
            List<Product>? list = await _context.Products.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
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
        public IActionResult GetByName(string name)
        {
            object? item = "Product not find!";
#pragma warning disable CS8604 // Possible null reference argument.
            List<Product> dtos = _context.Products.ToList();
#pragma warning restore CS8604 // Possible null reference argument.
            List<Product> products = new();
            foreach (Product dto in dtos)
            {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
                if (dto.Name.Contains(name))
#pragma warning restore CS8602 // Dereference of a possibly null reference.
                {
                    products.Add(dto);
                }
            }
            if (products.Count != 0)
                item = products;
            return Ok(item);
        }

        [HttpPost]
        [Route("post")]
        public async Task<IActionResult> AddProduct([FromBody] ProductViewModels model)
        {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            string base64Image = model.Image;
#pragma warning disable CS8604 // Possible null reference argument.
            if (IsBase64(base64Image) != true)
#pragma warning restore CS8604 // Possible null reference argument.
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
                Name = model.Name,
                Description = model.Description,
                Price = decimal.Parse("" + model.Price),
                Image = base64Image,
                TypeProduct = model.TypeProduct,
                Link = model.Link,
                IdentityANDROID = model.IndentityANDROID
            };
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            await _context.Products.AddAsync(product);
#pragma warning restore CS8602 // Dereference of a possibly null reference.
            _context.SaveChanges();
            return Ok(product.Id);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult RemoveProduct(string name)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            List<Product> dtos = _context.Products.ToList();
#pragma warning restore CS8604 // Possible null reference argument.
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
                return BadRequest("Not find this item!");
            }
            else
            {
                return Ok("Successfully deleted");

            }
        }
    }
}
