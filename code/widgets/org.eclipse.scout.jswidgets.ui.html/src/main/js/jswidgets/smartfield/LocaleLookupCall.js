/*******************************************************************************
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
jswidgets.LocaleLookupCall = function() {
  jswidgets.LocaleLookupCall.parent.call(this);

  this.setDelay(250);
};
scout.inherits(jswidgets.LocaleLookupCall, scout.StaticLookupCall);

jswidgets.LocaleLookupCall.prototype._data = function() {
  return jswidgets.LocaleLookupCall.DATA;
};

jswidgets.LocaleLookupCall.DATA = [
  ['sq', 'Albanian'],
  ['sq_AL', 'Albanian (Albania)'],
  ['ar', 'Arabic'],
  ['ar_DZ', 'Arabic (Algeria)'],
  ['ar_BH', 'Arabic (Bahrain)'],
  ['ar_EG', 'Arabic (Egypt)'],
  ['ar_IQ', 'Arabic (Iraq)'],
  ['ar_JO', 'Arabic (Jordan)'],
  ['ar_KW', 'Arabic (Kuwait)'],
  ['ar_LB', 'Arabic (Lebanon)'],
  ['ar_LY', 'Arabic (Libya)'],
  ['ar_MA', 'Arabic (Morocco)'],
  ['ar_OM', 'Arabic (Oman)'],
  ['ar_QA', 'Arabic (Qatar)'],
  ['ar_SA', 'Arabic (Saudi Arabia)'],
  ['ar_SD', 'Arabic (Sudan)'],
  ['ar_SY', 'Arabic (Syria)'],
  ['ar_TN', 'Arabic (Tunisia)'],
  ['ar_AE', 'Arabic (United Arab Emirates)'],
  ['ar_YE', 'Arabic (Yemen)'],
  ['be', 'Belarusian'],
  ['be_BY', 'Belarusian (Belarus)'],
  ['bg', 'Bulgarian'],
  ['bg_BG', 'Bulgarian (Bulgaria)'],
  ['ca', 'Catalan'],
  ['ca_ES', 'Catalan (Spain)'],
  ['zh', 'Chinese'],
  ['zh_CN', 'Chinese (China)'],
  ['zh_HK', 'Chinese (Hong Kong)'],
  ['zh_SG', 'Chinese (Singapore)'],
  ['zh_TW', 'Chinese (Taiwan)'],
  ['hr', 'Croatian'],
  ['hr_HR', 'Croatian (Croatia)'],
  ['cs', 'Czech'],
  ['cs_CZ', 'Czech (Czech Republic)'],
  ['da', 'Danish'],
  ['da_DK', 'Danish (Denmark)'],
  ['nl', 'Dutch'],
  ['nl_BE', 'Dutch (Belgium)'],
  ['nl_NL', 'Dutch (Netherlands)'],
  ['en', 'English'],
  ['en_AU', 'English (Australia)'],
  ['en_CA', 'English (Canada)'],
  ['en_IN', 'English (India)'],
  ['en_IE', 'English (Ireland)'],
  ['en_MT', 'English (Malta)'],
  ['en_NZ', 'English (New Zealand)'],
  ['en_PH', 'English (Philippines)'],
  ['en_SG', 'English (Singapore)'],
  ['en_ZA', 'English (South Africa)'],
  ['en_GB', 'English (United Kingdom)'],
  ['en_US', 'English (United States)'],
  ['et', 'Estonian'],
  ['et_EE', 'Estonian (Estonia)'],
  ['fi', 'Finnish'],
  ['fi_FI', 'Finnish (Finland)'],
  ['fr', 'French'],
  ['fr_BE', 'French (Belgium)'],
  ['fr_CA', 'French (Canada)'],
  ['fr_FR', 'French (France)'],
  ['fr_LU', 'French (Luxembourg)'],
  ['fr_CH', 'French (Switzerland)'],
  ['de', 'German'],
  ['de_AT', 'German (Austria)'],
  ['de_DE', 'German (Germany)'],
  ['de_LU', 'German (Luxembourg)'],
  ['de_CH', 'German (Switzerland)'],
  ['el', 'Greek'],
  ['el_CY', 'Greek (Cyprus)'],
  ['el_GR', 'Greek (Greece)'],
  ['iw', 'Hebrew'],
  ['iw_IL', 'Hebrew (Israel)'],
  ['hi_IN', 'Hindi (India)'],
  ['hu', 'Hungarian'],
  ['hu_HU', 'Hungarian (Hungary)'],
  ['is', 'Icelandic'],
  ['is_IS', 'Icelandic (Iceland)'],
  ['in', 'Indonesian'],
  ['in_ID', 'Indonesian (Indonesia)'],
  ['ga', 'Irish'],
  ['ga_IE', 'Irish (Ireland)'],
  ['it', 'Italian'],
  ['it_IT', 'Italian (Italy)'],
  ['it_CH', 'Italian (Switzerland)'],
  ['ja', 'Japanese'],
  ['ja_JP', 'Japanese (Japan)'],
  ['ja_JP_JP_#u-ca-japanese', 'Japanese (Japan,JP)'],
  ['ko', 'Korean'],
  ['ko_KR', 'Korean (South Korea)'],
  ['lv', 'Latvian'],
  ['lv_LV', 'Latvian (Latvia)'],
  ['lt', 'Lithuanian'],
  ['lt_LT', 'Lithuanian (Lithuania)'],
  ['mk', 'Macedonian'],
  ['mk_MK', 'Macedonian (Macedonia)'],
  ['ms', 'Malay'],
  ['ms_MY', 'Malay (Malaysia)'],
  ['mt', 'Maltese'],
  ['mt_MT', 'Maltese (Malta)'],
  ['no', 'Norwegian'],
  ['no_NO', 'Norwegian (Norway)'],
  ['no_NO_NY', 'Norwegian (Norway,Nynorsk)'],
  ['pl', 'Polish'],
  ['pl_PL', 'Polish (Poland)'],
  ['pt', 'Portuguese'],
  ['pt_BR', 'Portuguese (Brazil)'],
  ['pt_PT', 'Portuguese (Portugal)'],
  ['ro', 'Romanian'],
  ['ro_RO', 'Romanian (Romania)'],
  ['ru', 'Russian'],
  ['ru_RU', 'Russian (Russia)'],
  ['sr', 'Serbian'],
  ['sr_BA', 'Serbian (Bosnia and Herzegovina)'],
  ['sr__#Latn', 'Serbian (Latin)'],
  ['sr_BA_#Latn', 'Serbian (Latin,Bosnia and Herzegovina)'],
  ['sr_ME_#Latn', 'Serbian (Latin,Montenegro)'],
  ['sr_RS_#Latn', 'Serbian (Latin,Serbia)'],
  ['sr_ME', 'Serbian (Montenegro)'],
  ['sr_CS', 'Serbian (Serbia and Montenegro)'],
  ['sr_RS', 'Serbian (Serbia)'],
  ['sk', 'Slovak'],
  ['sk_SK', 'Slovak (Slovakia)'],
  ['sl', 'Slovenian'],
  ['sl_SI', 'Slovenian (Slovenia)'],
  ['es', 'Spanish'],
  ['es_AR', 'Spanish (Argentina)'],
  ['es_BO', 'Spanish (Bolivia)'],
  ['es_CL', 'Spanish (Chile)'],
  ['es_CO', 'Spanish (Colombia)'],
  ['es_CR', 'Spanish (Costa Rica)'],
  ['es_DO', 'Spanish (Dominican Republic)'],
  ['es_EC', 'Spanish (Ecuador)'],
  ['es_SV', 'Spanish (El Salvador)'],
  ['es_GT', 'Spanish (Guatemala)'],
  ['es_HN', 'Spanish (Honduras)'],
  ['es_MX', 'Spanish (Mexico)'],
  ['es_NI', 'Spanish (Nicaragua)'],
  ['es_PA', 'Spanish (Panama)'],
  ['es_PY', 'Spanish (Paraguay)'],
  ['es_PE', 'Spanish (Peru)'],
  ['es_PR', 'Spanish (Puerto Rico)'],
  ['es_ES', 'Spanish (Spain)'],
  ['es_US', 'Spanish (United States)'],
  ['es_UY', 'Spanish (Uruguay)'],
  ['es_VE', 'Spanish (Venezuela)'],
  ['sv', 'Swedish'],
  ['sv_SE', 'Swedish (Sweden)'],
  ['th', 'Thai'],
  ['th_TH', 'Thai (Thailand)'],
  ['th_TH_TH_#u-nu-thai', 'Thai (Thailand,TH)'],
  ['tr', 'Turkish'],
  ['tr_TR', 'Turkish (Turkey)'],
  ['uk', 'Ukrainian'],
  ['uk_UA', 'Ukrainian (Ukraine)'],
  ['vi', 'Vietnamese'],
  ['vi_VN', 'Vietnamese (Vietnam)']
];
