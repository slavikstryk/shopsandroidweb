using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using ShopsAndroidWeb.Models;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : Controller
    {
        private readonly EFAppContext _context;

        public ReportController(EFAppContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _context.Reports.ToListAsync();
            return Ok(result);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var list = await _context.Reports.ToListAsync();
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
        public async Task<IActionResult> AddStatement([FromBody] ReportModel model)
        {
            var report = new Report
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                Email = model.Email,
                Product = model.Product,
                Text = model.Text
            };
            await _context.Reports.AddAsync(report);
            _context.SaveChanges();
            return Ok(report.Id);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> RemoveReport(int id)
        {
            id--;
            var list = await _context.Reports.ToListAsync();
            int size = list.Count;
            if (id <= size)
            {
                var item_delete = list.ElementAt(id);
                _context.Reports.Remove(item_delete);
                _context.SaveChanges();
            }
            else
            {
                id = size--;
                var item_delete = list.ElementAt(id);
                _context.Reports.Remove(item_delete);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}
