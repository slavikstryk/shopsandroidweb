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
        [Route("send/{name}/{emailTo}/{subject}/{text}/{product}/{toText}")]
        public IActionResult SendEmail(string name, string emailTo, string subject, string text, string product, string toText)
        {
            string res;
            try
            {
                MailAddress from = new("terafer2020@gmail.com", "ShopX");
                MailAddress to = new(emailTo);
                MailMessage m = new(from, to)
                {
                    Subject = subject,
                    IsBodyHtml = true,
                    Body = "<body style = \"user-select:none; margin: 0px; height:10vw; background-color: rgb(43, 43, 43); width:100%; display:flex; flex-direction:column;\">"
                                        + "<div style = \"display: flex; height: 1vw; width:100%; justify-content: center; background-color: rgb(0, 14, 204);\" ></ div >"
                                             + "<div style = \"padding-top: 2vw; background-color: rgb(43, 43, 43);\" >"
                                                 + "<h3 style = \" padding-left: 1.3vw;margin: 0px; color: rgb(180, 180, 180);\" > Здраствуйте, " + name + " </ h3 >"
                                                 + "<h5 style = \" padding-left: 1.3vw;margin: 0px; margin-top: 5px; color: rgb(160, 160, 160);\" >"
                                                 + "Ви звернулись в службу підтримки \"ShopX Technologic\".</ h5 >"
                                                 + "<div style = \"height: 1px; border-top: 1px dotted rgb(163,163,163);\" ></ div >"
                                            + "</div >"
                                            + "<div style = \"background-color: rgb(43, 43, 43); padding: 0.8vw;\" >"
                                                + "<div style = \"padding-top: 0.4vw; padding-bottom: 1px; background-color: rgb(32, 32, 32);\" >"
                                                      + "<h4 style = \"padding-left: 1.3vw; margin: 0px; margin-top: 5px; color: rgb(160, 160, 160);\" > Ваша жалоба на "
                                                            + "продукт \"" + product + "\" </ h4 >"
                                                       + "<h5 style = \"padding-left: 1.3vw; margin: 0px; margin-top: 15px; color: rgb(160, 160, 160);\" > \"" + toText + "\" </ h5 >"
                                                       + "<h5 style = \"padding-left: 1.3vw; margin-bottom: 0px; color: rgb(160, 160, 160);\" > Наш вам ответ.</ h5 >"
                                                       + "<h5 style = \"padding-left: 1.3vw; font-family: sans-serif; padding-right: 1.3vw; text-align: center; margin-top: 0px; margin: 2px; padding-top: 5px; background-color: rgb(40,40,40); color: rgb(160, 160, 160);\" >"
                                                            + text + "</ h5 >"
                                                + "</div >"
                                                + "<h6 style = \"margin: 0px; margin-top: 5px; color: rgb(160, 160, 160); text-align: center; font-family: sans-serif;\" > Дякуэмо що звернулись до нас.</ h6 >"
                                            + "</div >"
                                    + "</body >"
                };

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
