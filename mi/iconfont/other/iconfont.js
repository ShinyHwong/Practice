;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontgouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M848.809467 691.719174 331.064626 691.719174c-12.068873 0-22.427802-8.621355-24.600281-20.491707L204.426391 116.363218l-114.252137 0c-13.817704 0-25.019837-11.20111-25.019837-25.019837 0-13.81361 11.202133-25.01472 25.019837-25.01472L225.263975 66.328661c12.068873 0 22.423709 8.624425 24.600281 20.493753l102.042047 554.874483 496.90828 0c13.81361 0 25.015743 11.192923 25.015743 25.01165C873.826234 680.514995 862.625124 691.719174 848.809467 691.719174L848.809467 691.719174zM816.63979 569.093323 313.915038 569.093323c-13.81361 0-25.013697-11.205203-25.013697-25.02393 0-13.81361 11.200086-25.015743 25.013697-25.015743l485.244636 0 100.304474-273.748734L357.153818 245.304915c-13.814634 0-25.012673-11.200086-25.012673-25.01779 0-13.81361 11.199063-25.015743 25.012673-25.015743l578.11172 0c8.172123 0 15.82543 3.992941 20.50501 10.686387 4.675486 6.693446 5.788843 15.255449 2.977821 22.940478L840.122621 552.680515C836.51342 562.53086 827.130725 569.093323 816.63979 569.093323L816.63979 569.093323zM367.832018 954.336384c-54.807257 0-99.403964-44.611034-99.403964-99.428523 0-54.79293 44.596707-99.369172 99.403964-99.369172 54.807257 0 99.400894 44.577265 99.400894 99.369172C467.228819 909.72535 422.638251 954.336384 367.832018 954.336384L367.832018 954.336384zM367.832018 805.564036c-27.225061 0-49.372477 22.13002-49.372477 49.343825 0 27.244504 22.149463 49.396014 49.372477 49.396014s49.370431-22.151509 49.370431-49.396014C417.201425 827.694055 395.054009 805.564036 367.832018 805.564036L367.832018 805.564036zM800.564673 954.336384c-54.807257 0-99.402941-44.611034-99.402941-99.428523 0-54.79293 44.595684-99.369172 99.402941-99.369172 54.816466 0 99.42443 44.577265 99.42443 99.369172C899.989103 909.72535 855.38114 954.336384 800.564673 954.336384L800.564673 954.336384zM800.564673 805.564036c-27.225061 0-49.371454 22.13002-49.371454 49.343825 0 27.244504 22.146393 49.396014 49.371454 49.396014 27.241434 0 49.393967-22.151509 49.393967-49.396014C849.95864 827.694055 827.799968 805.564036 800.564673 805.564036L800.564673 805.564036zM800.564673 805.564036"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rightjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M282.658 19.285c8.738 0 17.476 3.345 24.132 10.001l458.615 458.547c13.346 13.346 13.346 34.918 0 48.266l-458.615 458.615c-13.346 13.346-34.918 13.346-48.266 0s-13.346-34.918 0-48.266l434.483-434.449-434.483-434.415c-13.346-13.346-13.346-34.918 0-48.266 6.69-6.69 15.394-10.035 24.132-10.035z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantouzuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M652.8 32 179.2 512 652.8 32Z"  ></path>' +
    '' +
    '<path d="M179.2 512 652.8 992 179.2 512Z"  ></path>' +
    '' +
    '<path d="M243.2 544c-6.4 0-19.2 0-25.6-6.4-12.8-12.8-12.8-32 0-44.8l480-480c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L262.4 537.6C256 544 249.6 544 243.2 544z"  ></path>' +
    '' +
    '<path d="M716.8 1024c-6.4 0-19.2 0-25.6-6.4L217.6 537.6c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l480 480c12.8 12.8 12.8 32 0 44.8C736 1017.6 729.6 1024 716.8 1024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon22301" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M190.399421 581.799716 384.652614 581.799716 384.652614 609.54871 190.399421 609.54871 190.399421 581.799716Z"  ></path>' +
    '' +
    '<path d="M467.905736 581.799716 551.155788 581.799716 551.155788 609.54871 467.905736 609.54871 467.905736 581.799716Z"  ></path>' +
    '' +
    '<path d="M190.399421 665.051815 329.150532 665.051815 329.150532 692.801832 190.399421 692.801832 190.399421 665.051815Z"  ></path>' +
    '' +
    '<path d="M884.161115 193.293331 134.899386 193.293331c-45.960775 0-83.251076 37.262672-83.251076 83.253122l0 471.756437c0 45.989427 37.290301 83.251076 83.251076 83.251076L884.161115 831.553966c45.960775 0 83.250052-37.263695 83.250052-83.251076L967.411167 276.54543C967.412191 230.553956 930.122913 193.293331 884.161115 193.293331L884.161115 193.293331zM107.149369 276.544407c0-15.312754 12.440333-27.750017 27.748994-27.750017L884.161115 248.794389c15.311731 0 27.748994 12.440333 27.748994 27.750017l0 55.500035L107.150392 332.044442 107.149369 276.544407 107.149369 276.544407 107.149369 276.544407zM107.149369 387.547547l804.759717 0 0 55.501058L107.149369 443.048605 107.149369 387.547547 107.149369 387.547547zM884.161115 776.051885 134.899386 776.051885c-15.311731 0-27.748994-12.440333-27.748994-27.748994L107.150392 498.547617l804.759717 0 0 249.755274c0 15.311731-12.440333 27.748994-27.748994 27.748994L884.161115 776.051885 884.161115 776.051885z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)