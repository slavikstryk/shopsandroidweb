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
            var list = await _context.Products.ToListAsync();
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
            var list = await _context.Products.ToListAsync();
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
            List<Product> dtos = _context.Products.ToList();
            foreach (Product dto in dtos)
            {
                if (dto.Name == name)
                {
                    item = dto;
                }
            }
            return Ok(item);
        }

        [HttpPost]
        [Route("post")]
        public async Task<IActionResult> AddProduct([FromBody] ProductViewModels model)
        {
            string base64Image = model.Image;
            if (IsBase64(base64Image) != true)
            {
                base64Image = ImageToBase64();
            }
            else
            {
                base64Image = model.Image;
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
            await _context.Products.AddAsync(product);
            _context.SaveChanges();
            return Ok(product.Id);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> RemoveProduct(string name)
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
                return BadRequest("Not find this item!");
            }
            else
            {
                return Ok("Successfully deleted");

            }
        }
    }
}
