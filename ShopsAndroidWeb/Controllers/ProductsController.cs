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
    [ApiController]
    public class ProductsController : ControllerBase
    {

        static bool IsBase64(string base64)
        {
            base64 = base64.Trim();
            return (base64.Length % 4 == 0) && Regex.IsMatch(base64, @"^[a-zA-Z0-9\+/]*={0,3}$", RegexOptions.None);
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
            var list = await _context.Products.ToListAsync();
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var list = await _context.Products.ToListAsync();
            if (id < list.Count && id >= -1)
            {
                var item_find = list.ElementAt(id);
                return Ok(item_find);
            }
            else
            {
                var item_find = list.Last();
                return Ok(item_find);
            }
        }
        [HttpPost]
        [Route("post")]
        public async Task<IActionResult> AddProduct([FromBody] ProductViewModels model)
        {
            string base64Image = model.Image;
            if (IsBase64(base64Image) != true)
            {
                base64Image = ImageToBase64();
            }else {
                base64Image = model.Image;
            }
            var product = new Product
            {
                Name = model.Name,
                Description = model.Description,
                Price = decimal.Parse("" + model.Price),
                Image = base64Image,
                TypeProduct = model.TypeProduct,
                Link = model.Link

            };
            await _context.Products.AddAsync(product);
            _context.SaveChanges();
            return Ok(product.Id);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> RemoveProduct(int id)
        {
            id--;
            var list = await _context.Products.ToListAsync();
            int size = list.Count;
            if (id <= size)
            {
                var item_delete = list.ElementAt(id);
                _context.Products.Remove(item_delete);
                _context.SaveChanges();
            }
            else
            {
                id = size--;
                var item_delete = list.ElementAt(id);
                _context.Products.Remove(item_delete);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}
