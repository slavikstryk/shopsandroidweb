using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using ShopsAndroidWeb.Models;
using System.Net;
using System.Net.Mail;

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
            List<Report>? result = await _context.Reports.ToListAsync();
            return Ok(result);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            List<Report>? list = await _context.Reports.ToListAsync();
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
                Id = _context.Reports.Count() + 1,
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
        [Route("delete/{id}")]
        public async Task<IActionResult> RemoveReport(int id)
        {
            List<Report> list = await _context.Reports.ToListAsync();
            var res = "Object not found";

            foreach (Report item in list)
            {
                if (item.Id == id)
                {
                    _context.Reports.Remove(item);
                    await _context.SaveChangesAsync();
                    res = "Sucessffully remove";
                }
            };
            return Ok(res);
        }
    }
}
