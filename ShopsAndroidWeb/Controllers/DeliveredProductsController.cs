using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using System.Net;
using System.Net.Mail;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveredProductsController : Controller
    {
        private readonly EFAppContext _context;

        public DeliveredProductsController(EFAppContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            List<DeliveredProducts>? list = await _context.DeliveredProducts.ToListAsync();
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var list = await _context.DeliveredProducts.ToListAsync();
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
        public async Task<IActionResult> AddDelivered([FromBody] DeliveredProducts model)
        {
            var delivered = new DeliveredProducts
            {
                Id = _context.DeliveredProducts.Count() + 1,
                ProductName = model.ProductName,
                BuyersLastName = model.BuyersLastName,
                ProductPrice = model.ProductPrice,
                BuyersName = model.BuyersName,
                BuyersPhone = model.BuyersPhone,
                BuyersEmail = model.BuyersEmail,
                DeliveryAdress = model.DeliveryAdress,
                Status = model.Status
            };
            await _context.DeliveredProducts.AddAsync(delivered);
            _context.SaveChanges();
            return Ok(delivered.Id);
        }
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult?> UpdateDelivered([FromBody] DeliveredProducts delivered)
        {
            var result = await _context.DeliveredProducts.FirstOrDefaultAsync(e => e.Id == delivered.Id);
            if (result != null)
            {
                result.Id = delivered.Id;
                result.ProductName = delivered.ProductName;
                result.BuyersLastName = delivered.BuyersLastName;
                result.ProductPrice = delivered.ProductPrice;
                result.BuyersName = delivered.BuyersName;
                result.BuyersEmail = delivered.BuyersEmail;
                result.BuyersPhone = delivered.BuyersPhone;
                result.DeliveryAdress = delivered.DeliveryAdress;
                result.Status = delivered.Status;

                await _context.SaveChangesAsync();

                return Ok(result);
            }
            return null;
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult RemoveDelivered(int id)
        {
            List<DeliveredProducts> list = _context.DeliveredProducts.ToList();
            object? res = "Item not found";

            foreach (DeliveredProducts dto in list)
            {
                if (dto.Id == id)
                {
                    _context.DeliveredProducts.Remove(dto);
                    _context.SaveChanges();
                    res = "Successfully";
                }
            }

            return Ok(res);
        }

        [HttpDelete]
        [Route("clear")]
        public IActionResult AllRemoveDelivered()
        {
            foreach (DeliveredProducts dto in _context.DeliveredProducts.ToList())
            {
                _context.DeliveredProducts.Remove(dto);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}
