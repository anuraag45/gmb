import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  MERIT_SCORING_CONFIG,
  SCHOLARSHIP_SCHEMES_CONFIG,
  SCHOLARSHIP_DISCLAIMER
} from '@/data/eligibilityConfig';
import type { ScholarshipScheme } from '@/data/eligibilityConfig';
import {
  Calculator,
  Award,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EligibilityWizardProps {
  onApplyClick?: () => void;
}

type CategoryType = 'General' | 'EWS' | 'SEBC' | 'SC' | 'ST';
type GenderType = 'Male' | 'Female' | 'Other';
type IncomeBracket = 'below_2_5' | '2_5_to_6' | 'above_6';

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ onApplyClick }) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Part A: Merit Estimator Inputs
  const [mathsMarks, setMathsMarks] = useState<string>('');
  const [scienceMarks, setScienceMarks] = useState<string>('');
  const [meritError, setMeritError] = useState<string>('');

  // Part B: Scholarship Questionnaire Inputs
  const [category, setCategory] = useState<CategoryType>('General');
  const [gender, setGender] = useState<GenderType>('Male');
  const [incomeBracket, setIncomeBracket] = useState<IncomeBracket>('below_2_5');

  // Calculation helpers
  const numMaths = parseFloat(mathsMarks);
  const numScience = parseFloat(scienceMarks);
  const isMarksValid =
    !isNaN(numMaths) &&
    !isNaN(numScience) &&
    numMaths >= MERIT_SCORING_CONFIG.minMark &&
    numMaths <= MERIT_SCORING_CONFIG.maxMark &&
    numScience >= MERIT_SCORING_CONFIG.minMark &&
    numScience <= MERIT_SCORING_CONFIG.maxMark;

  const totalCoreMarks = isMarksValid ? numMaths + numScience : 0;
  const isPassing = isMarksValid && numMaths >= 35 && numScience >= 35;

  // Matched Merit Band
  const matchedMeritBand = isMarksValid
    ? MERIT_SCORING_CONFIG.bands.find(
        (b) => totalCoreMarks >= b.minScore && totalCoreMarks <= b.maxScore
      ) || MERIT_SCORING_CONFIG.bands[MERIT_SCORING_CONFIG.bands.length - 1]
    : null;

  // Matched Scholarships
  const matchedScholarships: ScholarshipScheme[] = SCHOLARSHIP_SCHEMES_CONFIG.filter((scheme) => {
    // 1. Gender check
    if (!scheme.eligibleGenders.includes(gender)) return false;

    // 2. Category check
    if (!scheme.eligibleCategories.includes(category)) return false;

    // 3. Income check
    const incomeValue =
      incomeBracket === 'below_2_5' ? 2.4 : incomeBracket === '2_5_to_6' ? 5.5 : 8.0;
    if (incomeValue > scheme.maxAnnualIncomeLakhs) return false;

    return true;
  });

  const handleNextFromStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setMeritError('');

    if (!mathsMarks || !scienceMarks) {
      setMeritError(t('wizard.errors.fillAllMarks', 'Please enter marks for both Maths and Science.'));
      return;
    }

    if (
      isNaN(numMaths) ||
      isNaN(numScience) ||
      numMaths < 0 ||
      numMaths > 100 ||
      numScience < 0 ||
      numScience > 100
    ) {
      setMeritError(t('wizard.errors.invalidRange', 'Marks must be valid numbers between 0 and 100.'));
      return;
    }

    setCurrentStep(2);
  };

  const handleReset = () => {
    setMathsMarks('');
    setScienceMarks('');
    setMeritError('');
    setCategory('General');
    setGender('Male');
    setIncomeBracket('below_2_5');
    setCurrentStep(1);
  };

  return (
    <section id="eligibility-wizard" className="py-16 md:py-24 bg-[#0B2F52] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('wizard.eyebrow', 'INTERACTIVE ADMISSION TOOL')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
            {t('wizard.title', 'ACPDC Merit Estimator & Scholarship Finder')}
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {t(
              'wizard.subtitle',
              'Check your estimated GTU diploma eligibility and discover government fee waiver schemes in 2 simple steps.'
            )}
          </p>
        </div>

        {/* Wizard Step Stepper */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 max-w-xl mx-auto">
          {[
            { step: 1, label: t('wizard.steps.step1', '1. SSC Marks'), icon: Calculator },
            { step: 2, label: t('wizard.steps.step2', '2. Category & Income'), icon: HelpCircle },
            { step: 3, label: t('wizard.steps.step3', '3. Results & Schemes'), icon: Award }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;

            return (
              <button
                key={item.step}
                type="button"
                onClick={() => {
                  if (item.step === 1 || (item.step === 2 && isMarksValid)) {
                    setCurrentStep(item.step as 1 | 2 | 3);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-[#EA580C] text-white font-bold shadow-md'
                    : isCompleted
                    ? 'bg-white/10 text-emerald-300 hover:bg-white/20'
                    : 'bg-white/5 text-slate-400 opacity-60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.step}</span>
              </button>
            );
          })}
        </div>

        {/* Wizard Main Card */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/20">
          
          {/* STEP 1: ACPDC Merit Score Estimator */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
                  {t('wizard.partA.badge', 'PART A: ACPDC MERIT ESTIMATOR')}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2F52]">
                  {t('wizard.partA.title', 'Enter Your 10th Standard (SSC) Marks')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t(
                    'wizard.partA.desc',
                    'Gujarat ACPDC computes the Core Diploma Merit Index from SSC Mathematics and Science out of 200 marks.'
                  )}
                </p>
              </div>

              {meritError && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{meritError}</span>
                </div>
              )}

              <form onSubmit={handleNextFromStep1} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Maths Marks Input */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-700 uppercase tracking-wider mb-1.5">
                      {t('wizard.partA.mathsLabel', '10th Mathematics Marks (out of 100) *')}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      required
                      value={mathsMarks}
                      onChange={(e) => setMathsMarks(e.target.value)}
                      placeholder="e.g. 78"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent bg-slate-50"
                    />
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {t('wizard.partA.passingNote', 'Minimum 35 marks required to pass')}
                    </span>
                  </div>

                  {/* Science Marks Input */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-700 uppercase tracking-wider mb-1.5">
                      {t('wizard.partA.scienceLabel', '10th Science & Tech Marks (out of 100) *')}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      required
                      value={scienceMarks}
                      onChange={(e) => setScienceMarks(e.target.value)}
                      placeholder="e.g. 84"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent bg-slate-50"
                    />
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {t('wizard.partA.passingNote', 'Minimum 35 marks required to pass')}
                    </span>
                  </div>
                </div>

                {/* Real-time Indicator Preview */}
                {isMarksValid && (
                  <div className="p-4 rounded-xl bg-[#EBF3FA] border border-[#0B2F52]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
                    <div>
                      <span className="text-[11px] font-mono text-[#0B2F52] font-semibold uppercase block">
                        {t('wizard.partA.coreIndex', 'Estimated Core Total (Maths + Science):')}
                      </span>
                      <span className="text-2xl font-bold text-[#0B2F52]">
                        {totalCoreMarks} / 200
                      </span>
                      <span className="text-xs text-slate-600 ml-2 font-medium">
                        ({((totalCoreMarks / 200) * 100).toFixed(1)}%)
                      </span>
                    </div>

                    <div className="text-right sm:text-right">
                      <span className="inline-flex items-center gap-1 bg-[#0B2F52] text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                        {matchedMeritBand?.estimatedPercentileBand}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500 font-mono">Step 1 of 3</span>
                  <Button type="submit" variant="primary" className="px-6 py-2.5">
                    <span>{t('wizard.buttons.continueToScholarships', 'Next: Check Scholarships')}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: Scholarship Questionnaire */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
                  {t('wizard.partB.badge', 'PART B: SCHOLARSHIP ELIGIBILITY')}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2F52]">
                  {t('wizard.partB.title', 'Category, Gender & Family Income Bracket')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t(
                    'wizard.partB.desc',
                    'Gujarat state scholarship schemes like MYSY and Digital Gujarat provide up to 100% tuition assistance based on social category and family income.'
                  )}
                </p>
              </div>

              <div className="space-y-6">
                {/* 1. Category Selection */}
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-700 uppercase tracking-wider mb-2">
                    {t('wizard.partB.categoryLabel', '1. Social Admission Category *')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {(['General', 'EWS', 'SEBC', 'SC', 'ST'] as CategoryType[]).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-2.5 rounded-lg text-xs font-bold font-mono transition-all border ${
                          category === cat
                            ? 'bg-[#0B2F52] text-white border-[#0B2F52] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Gender Selection */}
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-700 uppercase tracking-wider mb-2">
                    {t('wizard.partB.genderLabel', '2. Candidate Gender *')}
                  </label>
                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {(['Male', 'Female', 'Other'] as GenderType[]).map((gen) => (
                      <button
                        key={gen}
                        type="button"
                        onClick={() => setGender(gen)}
                        className={`px-3 py-2.5 rounded-lg text-xs font-bold font-mono transition-all border ${
                          gender === gen
                            ? 'bg-[#0B2F52] text-white border-[#0B2F52] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {gen === 'Female' ? `${gen} (Kanya Kelavani)` : gen}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Annual Family Income Bracket */}
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-700 uppercase tracking-wider mb-2">
                    {t('wizard.partB.incomeLabel', '3. Annual Family Income (from all sources) *')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        key: 'below_2_5',
                        title: 'Below ₹2.50 Lakhs/year',
                        sub: 'Post-Matric & MYSY Eligible'
                      },
                      {
                        key: '2_5_to_6',
                        title: '₹2.50 Lakhs to ₹6.00 Lakhs',
                        sub: 'MYSY & EWS Eligible'
                      },
                      {
                        key: 'above_6',
                        title: 'Above ₹6.00 Lakhs/year',
                        sub: 'General / Merit Standard'
                      }
                    ].map((inc) => (
                      <button
                        key={inc.key}
                        type="button"
                        onClick={() => setIncomeBracket(inc.key as IncomeBracket)}
                        className={`p-3.5 rounded-lg text-left transition-all border ${
                          incomeBracket === inc.key
                            ? 'bg-[#EBF3FA] border-[#0B2F52] shadow-xs'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-900">{inc.title}</span>
                          {incomeBracket === inc.key && (
                            <CheckCircle2 className="w-4 h-4 text-[#0B2F52]" />
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 block">{inc.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    {t('wizard.buttons.back', 'Back to Marks')}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-2.5"
                  >
                    <span>{t('wizard.buttons.viewResults', 'Generate Eligibility Report')}</span>
                    <Sparkles className="w-4 h-4 ml-1.5 text-orange-300" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Combined Interactive Report */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Report Top Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
                    {t('wizard.report.eyebrow', 'ESTIMATED ELIGIBILITY SUMMARY')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2F52]">
                    {t('wizard.report.title', 'Your Admission & Scholarship Breakdown')}
                  </h3>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('wizard.buttons.startOver', 'Recalculate')}</span>
                </Button>
              </div>

              {/* Part 1: ACPDC Merit Band & Branch Competitiveness */}
              <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#0B2F52]" />
                    <h4 className="text-base font-bold text-slate-900">
                      {t('wizard.report.meritEstimateTitle', '1. ACPDC Diploma Merit Rank Feasibility')}
                    </h4>
                  </div>
                  <span className="inline-flex items-center text-xs font-mono font-bold text-[#0B2F52] bg-[#EBF3FA] px-2.5 py-1 rounded">
                    Score: {totalCoreMarks}/200 ({((totalCoreMarks / 200) * 100).toFixed(1)}%)
                  </span>
                </div>

                {isPassing ? (
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 mb-1">
                        {t('wizard.report.percentileBandLabel', 'Estimated ACPDC Percentile Range:')}
                      </div>
                      <div className="text-lg font-bold text-emerald-700">
                        {matchedMeritBand?.estimatedPercentileBand}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {matchedMeritBand?.guidanceNote}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        {t('wizard.report.competitiveBranchesLabel', 'Typically Competitive Diploma Programmes at GMB Polytechnic:')}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {matchedMeritBand?.competitiveBranches.map((br) => (
                          <span
                            key={br}
                            className="text-xs font-medium bg-white border border-slate-300 text-slate-800 px-3 py-1 rounded-full shadow-2xs"
                          >
                            ✓ {br}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-lg">
                    {t(
                      'wizard.report.failingMarks',
                      'Minimum 35 marks in both Maths and Science are required for diploma eligibility. Please consult ACPDC supplementary rounds.'
                    )}
                  </div>
                )}

                {/* Official ACPDC Link & Disclaimer */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-200/80">
                  <p className="italic text-[11px] leading-relaxed max-w-xl">
                    * {MERIT_SCORING_CONFIG.disclaimer}
                  </p>
                  <a
                    href={MERIT_SCORING_CONFIG.officialAcpdcUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0B2F52] hover:text-[#EA580C] font-semibold underline shrink-0"
                  >
                    <span>ACPDC Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Part 2: Matched Government Scholarship Schemes */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#EA580C]" />
                  <h4 className="text-base font-bold text-slate-900">
                    {t('wizard.report.scholarshipTitle', '2. Government Scholarship & Fee Waiver Schemes You Likely Qualify For')}
                  </h4>
                </div>

                {matchedScholarships.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matchedScholarships.map((scheme) => (
                      <div
                        key={scheme.id}
                        className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#0B2F52] transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[11px] font-mono font-bold bg-[#EBF3FA] text-[#0B2F52] px-2 py-0.5 rounded">
                              {scheme.shortCode}
                            </span>
                            <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                              Eligible
                            </span>
                          </div>

                          <h5 className="text-sm font-bold text-[#0B2F52] leading-snug">
                            {scheme.name}
                          </h5>

                          <div className="p-2.5 rounded-lg bg-orange-50/80 border border-orange-200/60 text-xs font-semibold text-orange-900">
                            {scheme.benefitSummary}
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {scheme.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10.5px] font-mono text-slate-400">
                            Govt of Gujarat
                          </span>
                          <a
                            href={scheme.officialPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2F52] hover:text-[#EA580C] transition-colors"
                          >
                            <span>Apply on {scheme.shortCode} Portal</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                    No specific state quota scheme matched this category and income combination. General merit scholarships may still apply.
                  </div>
                )}

                {/* Visible Scheme Disclaimer */}
                <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">
                    {SCHOLARSHIP_DISCLAIMER}
                  </p>
                </div>
              </div>

              {/* Final CTA Callout */}
              <div className="p-6 rounded-xl bg-linear-to-r from-[#06182B] to-[#0B2F52] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-bold font-heading">
                    {t('wizard.report.ctaTitle', 'Ready to Join GMB Polytechnic, Rajula?')}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {t('wizard.report.ctaDesc', 'Submit your admission enquiry for 2026-27 or get in touch with our helpdesk.')}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {onApplyClick && (
                    <Button
                      variant="primary"
                      onClick={onApplyClick}
                      className="whitespace-nowrap px-5 py-2.5"
                    >
                      {t('hero.applyNow', 'Apply for Admission')}
                    </Button>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
