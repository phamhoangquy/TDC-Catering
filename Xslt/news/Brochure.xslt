<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/NewsDetail">
		<div class="container">
			<div class="wowbook-wrapper">
				<div id="wowbook">
					<xsl:apply-templates select="NewsImages"></xsl:apply-templates>
				</div>
			</div>
			<div class="wowbook-control">
				<ul>
					<li><a id="first" href="#"><span class="mdi mdi-chevron-double-left"></span></a></li>
					<li><a id="back" href="#"><span class="mdi mdi-chevron-left"></span></a></li>
					<li><a id="zoomout" href="#"><span class="mdi mdi-magnify-minus-outline"></span></a></li>
					<li><a id="zoomin" href="#"><span class="mdi mdi-magnify-plus-outline"></span></a></li>
					<li><a id="next" href="#"><span class="mdi mdi-chevron-right"></span></a></li>
					<li><a id="last" href="#"><span class="mdi mdi-chevron-double-right"></span></a></li>
				</ul>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="NewsImages">
		<div class="item">
			<img>
			<xsl:attribute name="src">
				<xsl:value-of select="ImageUrl"></xsl:value-of>
			</xsl:attribute>
			</img>
		</div>
	</xsl:template>

</xsl:stylesheet>