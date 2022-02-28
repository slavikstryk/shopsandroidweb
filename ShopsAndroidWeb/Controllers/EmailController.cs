using Microsoft.AspNetCore.Mvc;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using ShopsAndroidWeb.Models;
using System.Net;
using System.Net.Mail;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        [HttpPost]
        [Route("send/{emailTo}/{subject}/{text}/{product}/{toText}")]
        public async Task<IActionResult> SendEmail(string emailTo, string subject, string text, String product, String toText)
        {
            string res;
            try
            {
                MailAddress from = new("terafer2020@gmail.com", "ShopX");
                MailAddress to = new(emailTo);
                MailMessage m = new(from, to);

                m.Subject = subject;
                m.Body = "<h3>Ваша жалоба чи питання стосовно товару '" + product + "': " + toText + "</h3><br/>" +
                    "Наша відповідь: " + text + ".<br/> Дякуємо що звернулися до служби підтримки 'ShopX Technical'.";
                m.IsBodyHtml = true;

                SmtpClient smtp = new("smtp.gmail.com", 587)
                {
                    Credentials = new NetworkCredential("terafer2020@gmail.com", "Yaroslav16"),
                    EnableSsl = true
                };
                smtp.Send(m);
                res = "Sucessfull send";
            }
            catch (Exception ex)
            {
                res = ex.Message;
            }
            return Ok(res);
        }
    }
}
