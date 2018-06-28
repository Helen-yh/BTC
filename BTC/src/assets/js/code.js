
class code {
  constructor () {
    this.sendcode_url = 'https://api.netease.im/sms/sendcode.action'
    this.curr_time = new Date()
    this.time = ''
    this.nonce = Math.floor(Math.random() * 10)
    this.appid = '2027465dab01c40e1997cd02ada0d3cc'
    this.secret = '692cca828348'
    this.check_str = this.secret + this.nonce + this.curr_time
    this.check_sum = hex_sha1(this.check_str)
    headers = {}
    // headers['AppKey'] = appid
    // headers['CurTime'] = curr_time
    // headers['CheckSum'] = check_sum
    // headers['Nonce'] = none
    // headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  }
  sendcode () {
    $.ajax({
      url: this.sendcode_url,
      data: data,
      dataType: 'json',
      headers: {
        'AppKey': this.appid,
        'CurTime': this.CurTime,
        'CheckSum': this.CheckSum,
        'Nonce': this.Nonce,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (data) {
        console.log(data)
      }
    })
  }
}
// APP_Key = '2027465dab01c40e1997cd02ada0d3cc'
//
// APP_SECRET = '692cca828348'
//
// SENDCODE_URL = 'https://api.netease.im/sms/sendcode.action'
//
// VERIFYCODE_URL = 'https://api.netease.im/sms/verifycode.action'
// def sendcode(mobile):
//
// url = settings.SENDCODE_URL
// curr_time = int(time.time())
// none = str(uuid.uuid4())
// appid = settings.APP_Key
// secret = settings.APP_SECRET
// check_str = "%s%s%d" % (secret, none, curr_time)
// check_sum = hashlib.sha1(check_str).hexdigest()
//
// headers = {}
// headers['AppKey'] = appid
// headers['CurTime'] = curr_time
// headers['CheckSum'] = check_sum
// headers['Nonce'] = none
// headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// payload = 'templateid=%s&mobile=%s' % ('3038261', mobile)
//     # payload = 'mobile=%s' % mobile
//
// ret = 0
// err_msg = ""
// try:
// rr = requests.post(url, headers=headers, data=payload)
// resp = utils.json_loads(rr.text)
// print resp
// code = resp.get('code')
// msg = resp.get('msg')
// obj = resp.get('obj')
// if code != 200:
// ret = -1
// err_msg = msg
// else:
// err_msg = obj
// except Exception as e:
// ret = -1
// err_msg = str(e)
//
// return ret, err_msg
