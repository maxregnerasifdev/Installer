        ��  ��                  �  ,   U I F I L E   ���     0	          <?xml version="1.0" encoding="utf-8"?>
<duixml>
<element resid="PlatformPasswordDialogTop" layout="borderlayout()" accessible="true" accrole="pane">
<RichText id="atom(PlatformPasswordDialogTitle)" contentalign="endellipsis|wrapleft" accessible="true" accrole="statictext" sheet="DialogStyle"/>
<element layout="verticalflowlayout(0,0,0,0)" active="pointer">
<RichText id="atom(PlatformPasswordDialogDescription)" contentalign="endellipsis|wrapleft" accessible="true" accrole="statictext" sheet="DialogStyle"/>
<element id="atom(passwordsection)" layout="verticalflowlayout(0,0,0,0)" margin="rect(0,14rp,0,0)" active="pointer">
<element layout="flowlayout(0,0,0,0)" behaviors="PVL::ImplicitAnimation()" active="pointer">
<TouchEdit2 class="moderneditsmall" id="atom(PlatformPasswordInput)" passwordcharacter="9679" prompttext="resstr(1007)" promptwithcaret="true" accname="" visible="true" accessible="true" shortcut="auto"/>
</element>
</element>
</element>
</element>
<RichText resid="PlatformRoot" id="atom(ModalDialogElement)" accessible="true" contentalign="endellipsis|wrapleft" sheet="DialogStyle"/>
<stylesheets>
<style resid="DialogStyle">
<RichText font="iconfont;125%"/>
</style>
</stylesheets>
</duixml>
